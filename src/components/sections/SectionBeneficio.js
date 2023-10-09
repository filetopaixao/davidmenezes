import React from 'react';
import Header from "../elements/Header";
import { Fade, Slide } from '@mui/material';
import { ChatBubble } from '@mui/icons-material';

const SectionCapa = () => {
    const [animationStart, setAnimationStart] = React.useState(false);

    React.useEffect(() => {
        setAnimationStart(true);
    }, []);

    return (
        <section className="section-capa">
            <Header animationStart={animationStart} />
            <Fade in={animationStart} timeout={3000}>
                <div className="section-capa__title">
                    <h1>DAVID MENEZES</h1>
                    <h1>MUAY THAI</h1>
                    <h1>TRAINING</h1>
                </div>
            </Fade>
            <Slide direction="left" in={animationStart} timeout={1000}>
                <a href="#" className="section-capa__cta">
                    AGENDE UMA AULA <ChatBubble />
                </a>
            </Slide>
        </section>
    )
}

export default SectionCapa;