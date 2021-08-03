import React, { useEffect } from "react";
import * as tfvis from "@tensorflow/tfjs-vis";
import * as tf from "@tensorflow/tfjs";

export default function CarsList() {
  const requestCars = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json"
    );
    const responseData = await response.json();
    const data = responseData.map(({ Miles_per_Gallon, Weight_in_lbs }) => {
      return {
        mpg: Miles_per_Gallon,
        weight: Weight_in_lbs,
      };
    });

    return data;
  };
  const run = async () => {
    const data = await requestCars();
    const data_xy = data.map((d) => {
      return {
        x: d.mpg,
        y: d.weight,
      };
    });
    console.log(data_xy);

    tfvis.render.scatterplot(
      {
        name: "Consume vs Peso",
      },
      { values: data_xy },
      { xLabel: "Miles_per_gallon", yLabel: "Weight_in_lbs", height: 300 }
    );

    const model = createModel();
    tfvis.show.modelSummary({ name: "Model Info" }, model);
  };

  const createModel = () => {
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }));
    model.add(tf.layers.dense({ units: 1, useBias: true }));
    return model;
  };
  useEffect(() => {
    run();
    return () => {};
  }, []);

  return <></>;
}
