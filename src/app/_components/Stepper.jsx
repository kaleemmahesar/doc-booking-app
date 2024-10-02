import { Check } from "lucide-react";
import React, { useState } from "react";

const Stepper = ({formStep}) => {
    const steps = ["Date & Time", "Mobile Numeber", "Patient Information"];
    const [complete, setComplete] = useState(false);
    return (
        <>
            <div className="flex">
                {steps?.map((step, i) => (
                    <div
                        key={i}
                        className={`step-item ${formStep === i + 1 && "active"} ${(i + 1 < formStep || complete) && "complete"
                            } `}
                    >
                        <div className="step">
                            {i + 1 < formStep || complete ? <Check size={24} /> : i + 1}
                        </div>
                        {/* <p className="text-gray-500 mt-3">{step}</p> */}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Stepper;