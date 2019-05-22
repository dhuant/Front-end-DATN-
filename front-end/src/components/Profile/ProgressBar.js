import React, { Component } from 'react'
import './ProgressBar.css'

let step = 'step1'
const step1 = document.getElementById('step1')
const step2 = document.getElementById('step2')
const step3 = document.getElementById('step3')
const step4 = document.getElementById('step4')

export default class ProgressBar extends Component {
    next = () => {
        if (step === 'step1') {
            step = 'step2';
            step1.classList.remove("is-active");
            step1.classList.add("is-complete");
            step2.classList.add("is-active");

        } else if (step === 'step2') {
            step = 'step3';
            step2.classList.remove("is-active");
            step2.classList.add("is-complete");
            step3.classList.add("is-active");

        } else if (step === 'step3') {
            step = 'step4';
            step3.classList.remove("is-active");
            step3.classList.add("is-complete");
            step4.classList.add("is-active");

        } else if (step === 'step4') {
            step = 'complete';
            step4.classList.remove("is-active");
            step4.classList.add("is-complete");

        } else if (step === 'complete') {
            step = 'step1';
            step4.classList.remove("is-complete");
            step3.classList.remove("is-complete");
            step2.classList.remove("is-complete");
            step1.classList.remove("is-complete");
            step1.classList.add("is-active");
        }
    }
    render() {
        return (
            <div className="container">
                <div className="progress">
                    <div className="progress-track"></div>
                    <div id='step1' className="progress-step is-complete">
                        Step One
                    </div>
                    <div id='step2' className="progress-step">
                        Step Two
                    </div>
                    <div id='step3' className="progress-step">
                        Step Three
                    </div>
                    <div id='step4' className="progress-step">
                        Complete
                    </div>
                </div>
                <button onClick={this.next}>Next Step</button>
            </div>
        )
    }
}
