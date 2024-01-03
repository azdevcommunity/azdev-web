import {NavigateFunction} from "react-router-dom";

const routing = {
    forward: (paramsFunction: NavigateFunction) => {
        paramsFunction(1);
    },
    backward: (paramsFunction: NavigateFunction) => {
        paramsFunction(-1);
    },
    routeTo: (paramsFunction: NavigateFunction, paramsUrl: string) => {
        paramsFunction(paramsUrl);
    },
    notFound: (paramsFunction: NavigateFunction) => {
        paramsFunction("/not-found");
    }

};

export default routing;
