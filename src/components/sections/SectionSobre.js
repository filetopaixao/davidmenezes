import React from 'react';
import Beneficio from "../elements/Beneficio";
import Beneficio1 from '../../assets/images/beneficio1.jpg';
import Beneficio2 from '../../assets/images/beneficio2.jpg';
import Beneficio3 from '../../assets/images/beneficio3.jpg';
import { useOnScreen } from '../../utils/useOnScreen';

const SectionBeneficio = ({sectionBeneficioRef}) => {
    const [isVisibleState, setIsVisibleState] = React.useState(false);

    const visibilityRef = React.useRef(null);

    const isVisible = useOnScreen(visibilityRef);

    React.useEffect(() => {
        if(!isVisibleState && isVisible) setIsVisibleState(isVisible);
    }, [isVisible]);

    return (
        <section className="section-beneficio" ref={sectionBeneficioRef}>
            <h1 ref={visibilityRef}>BENEFÍCIOS DO <br /> <span className="primary">MUAY THAI</span> </h1>
            <div className="section-beneficio__beneficio">
                <Beneficio
                    title="CORPO"
                    beneficios={['Equilíbrio', 'Coordenação', 'Flexibilidade', 'Tônus Muscular', 'Resistência']}
                    image={Beneficio1}
                    isVisible={isVisibleState}
                    delay='300ms'
                />
                <Beneficio
                    title="MENTE"
                    beneficios={['Retenção de Memória', 'Confiança', 'Autocontrole', 'Resolução de Problemas', 'Adaptação']}
                    image={Beneficio2}
                    isVisible={isVisibleState}
                    delay='600ms'
                />
                <Beneficio
                    title="ESPÍRITO"
                    beneficios={['Paciência', 'Respeito', 'Integridade', 'Humildade', 'Perseverança']}
                    image={Beneficio3}
                    isVisible={isVisibleState}
                    delay='900ms'
                />
            </div>
        </section>
    )
}

export default SectionBeneficio;