from flask import Flask, render_template, request, jsonify
import numpy as np
import pandas as pd
import xgboost as xgb

app = Flask(__name__, template_folder='web')
model = xgb.XGBRegressor()
model.load_model("model.json")



@app.route('/', methods=['POST', 'GET'])
def result():
    if request.method == 'POST':
        request_data = request.get_json()
        hora_inicio = request_data['hora_inicio']
        x_origen = request_data['x_origen']
        y_origen = request_data['y_origen']
        x_parada = request_data['x_parada']
        y_parada = request_data['y_parada']
        data = [[hora_inicio, x_origen, y_origen, x_parada, y_parada]]
        df = pd.DataFrame(data, columns=['start_hour_decimal', 'posx_ajustada_origen',
                          'posy_ajustada_origen', 'posx_ajustada_destino', 'posy_ajustada_destino'])
        register = df[['start_hour_decimal', 'posx_ajustada_origen', 'posy_ajustada_origen',
                       'posx_ajustada_destino', 'posy_ajustada_destino']].to_numpy()
        result = model.predict(register)
        return jsonify({"result": str(result[0])})


if __name__ == '__main__':
    app.run(debug=True)
