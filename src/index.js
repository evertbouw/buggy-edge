// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from "worker-loader!./foo.worker";

const worker = new Worker();

worker.addEventListener("message", ({ data }) => {
    document.getElementById("root").innerText = data;
});
