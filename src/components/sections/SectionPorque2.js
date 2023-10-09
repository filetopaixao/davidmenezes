import React from 'react';
import { useOnScreen } from '../../utils/useOnScreen';
import { Slide } from '@mui/material';

const SectionPorque1 = () => {
    const [isVisibleState, setIsVisibleState] = React.useState(false);

    const visibilityRef = React.useRef(null);

    const isVisible = useOnScreen(visibilityRef);

    React.useEffect(() => {
        if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
    }, [isVisible]);

    return (
        <section className="section-porque1" ref={visibilityRef}>
            <Slide direction="left" in={isVisibleState} timeout={2000}>
                <div className="section-porque1__copy">
                    <div className="section-porque1__copy__text">
                        <h1>QUEIMANDO CALORIAS COM O MUAY THAI</h1>
                        <p>O treino de Muay Thai é uma boa opção para quem quer perder peso e tonificar os músculos. A arte marcial virou febre entre os famosos, Sabrina Sato, Fernanda Souza e várias outras celebridades praticam o Muay Thai para manter a boa forma.</p>
                    </div>
                </div>
            </Slide>
        </section>
    )
}

export default SectionPorque1;