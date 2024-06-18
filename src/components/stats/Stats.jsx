import  { useEffect, useRef } from 'react';
import './Stats.css';

function increment(element) {
    const targetValue = parseInt(element.getAttribute('data-increment'), 10);
    let startValue = 0;
    const duration = Math.floor(Math.random() * (5000 - 1500 + 1) + 1500);
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const value = Math.round(startValue + (targetValue - startValue) * progress);
        element.textContent = commaSeparateNumber(value);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function commaSeparateNumber(val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Stats = () => {
    const incrementsRef = useRef([]);

    useEffect(() => {
        incrementsRef.current.forEach(increment);
    }, []);

    return (
        <section className="gradient-section">
            <div className="container-fluid my-5" id="ScrollPast">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title my-md-3 my-0">
                            <h2>Live statistics</h2>
                            <p><strong>How are we doing</strong></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {['Satisfied clients', 'Served projects', 'Total hours', 'Coffee cups'].map((label, index) => (
                        <div key={index} className="col-md-3 col-6">
                            <div className="card statistics-card">
                                <i className={`fas ${getIconClass(label)}`}></i>
                                <div className="info d-flex flex-column">
                                    <span className="mb-3">{label}</span>
                                    <div
                                        ref={(el) => incrementsRef.current[index] = el}
                                        className="incremental"
                                        data-increment="1000"
                                    >
                                        0
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

function getIconClass(label) {
    switch (label) {
        case 'Satisfied clients':
            return 'fa-users';
        case 'Served projects':
            return 'fa-font';
        case 'Total hours':
            return 'fa-link';
        case 'Coffee cups':
            return 'fa-coffee';
        default:
            return '';
    }
}

export default Stats;
