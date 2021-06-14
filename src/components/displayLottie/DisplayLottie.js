import React, {Suspense} from "react";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = (props) => {
  
    const animationData = props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <div>
        <Suspense fallback={<Loading />}>
          {/* To override default onClick pause by Lottie */}
          <div onClick="null">
            <Lottie options={defaultOptions} />
          </div>
        </Suspense>
      </div>
    );
  }

export default DisplayLottie;
