import React, {useEffect, useState} from 'react';
import './advantage.scss';
import ReactSwipe from "react-swipe";

const advantageList = [
    {
        'name': 'Consistent',
        'title': ' 01 We turn the idea of legal services',
        'content': "01 Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine."
    },
    {
        'name': 'Customer oriented',

        'title': '02 We turn the idea of legal services',
        'content': "02 Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine."
    },
    {
        'name': 'Innovative',

        'title': '03 We turn the idea of legal services',
        'content': "03 Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine."
    },
    {
        'name': 'Business oriented',

        'title': '04 We turn the idea of legal services',
        'content': "04 Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine."
    },
];

const Advantage = () => {
    const [mobileLayout, setMobileLayout] = useState(window.outerWidth <= 768);

    let reactSwipeEl;

    const [advantageActive, setAdvantageActive] = useState(advantageList[0]);

    function selectList(e) {
        if (e.target.getAttribute('data-number')) {
            setAdvantageActive(advantageList[e.target.getAttribute('data-number')]);
        }
    }

    const handleResize = (event) => {
        if (window.outerWidth <= 768) {
            setMobileLayout(true);
        } else {
            setMobileLayout(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (mobileLayout === true ?
            <div className="advantage">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: true,
                        // transitionEnd: (index, elem) => tra(index, elem),
                        // stopPropagation: false,
                        // widthOfSiblingSlidePreview: 10,
                        auto: 1000,
                    }}
                    childCount={Object.keys(advantageList).length}
                    ref={el => (reactSwipeEl = el)}
                >

                    {advantageList.map(i => {

                        return <div className="advantage__wrapper">
                            <div className="advantage__nav" onClick={(e) => selectList(e)}>
                                <span className="advantage__nav-item" data-number="consistent">{i.name}</span>
                            </div>
                            <div className="advantage__content">
                                <h4 className="advantage__title">{i.title}</h4>
                                <p className="advantage__text">{i.content}</p>
                            </div>
                        </div>
                    })}
                </ReactSwipe>
            </div>

            :
            <div className="advantage">
                <div className="advantage__nav" onClick={(e) => selectList(e)}>

                    <span className="advantage__nav-item" data-number="0">Consistent</span>
                    <span className="advantage__nav-item" data-number="1">Customer oriented</span>
                    <span className="advantage__nav-item" data-number="2">Innovative</span>
                    <span className="advantage__nav-item" data-number="3">Business oriented</span>
                </div>
                <div className="advantage__content">
                    <h4 className="advantage__title">{advantageActive.title}</h4>
                    <p className="advantage__text">{advantageActive.content}</p>
                </div>
            </div>

        // <div className="advantage">
        //
        //     <div className="advantage__nav" onClick={(e) => selectList(e)}>
        //         <ReactSwipe
        //             className="carousel"
        //             swipeOptions={{
        //                 continuous: true,
        //                 // transitionEnd: (index, elem) => tra(index, elem),
        //                 // stopPropagation: false,
        //                 widthOfSiblingSlidePreview: 20,
        //                 auto: 1000,
        //             }}
        //             style={{
        //                 container: {
        //                     overflow: 'hidden',
        //                     visibility: 'hidden',
        //                     position: 'relative'
        //                 },
        //                 wrapper: {
        //                     overflow: 'hidden',
        //                     position: 'relative'
        //                 },
        //                 child: {
        //                     float: 'left',
        //                     width: '245px',
        //                     position: 'relative',
        //                     transitionProperty: 'transform'
        //                 }
        //             }}
        //             childCount={4}
        //             ref={el => (reactSwipeEl = el)}
        //         >
        //             <span className="advantage__nav-item" data-number="0">Consistent</span>
        //             <span className="advantage__nav-item" data-number="1">Customer oriented</span>
        //             <span className="advantage__nav-item" data-number="2">Innovative</span>
        //             <span className="advantage__nav-item" data-number="3">Business oriented</span>
        //         </ReactSwipe>
        //         <button onClick={() => reactSwipeEl.getNumSlides()}>Next</button>
        //     </div>
        //
        //     <div className="advantage__content">
        //         <h4 className="advantage__title">{advantageActive.title}</h4>
        //         <p className="advantage__text">{advantageActive.content}</p>
        //     </div>
        // </div>
        //
        // :
        // <div className="advantage">
        //     <div className="advantage__nav" onClick={(e) => selectList(e)}>
        //
        //         <span className="advantage__nav-item" data-number="0">Consistent</span>
        //         <span className="advantage__nav-item" data-number="1">Customer oriented</span>
        //         <span className="advantage__nav-item" data-number="2">Innovative</span>
        //         <span className="advantage__nav-item" data-number="3">Business oriented</span>
        //     </div>
        //     <div className="advantage__content">
        //         <h4 className="advantage__title">{advantageActive.title}</h4>
        //         <p className="advantage__text">{advantageActive.content}</p>
        //     </div>
        // </div>


    );
};

export default Advantage;