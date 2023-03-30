import React from 'react';
import BenefitCard from "./BenefitCard";
import {collection, getDocs} from "firebase/firestore";
import {db, storage} from "../firebase";
import {getDownloadURL, ref} from "firebase/storage";

class BenefitsClass extends React.Component {
    state = {
        arrBenefits: [],
    }
    async componentDidMount() {
        let docs = await getDocs(collection(db, "benefits"));
        let tempArr = [];
        docs.forEach((doc) => {
            tempArr.push(doc.data())
        })
        for (const doc of tempArr) {
            doc.img = await getDownloadURL(ref(storage,`benefits/${doc.img}`));
        }
        this.setState({arrBenefits: tempArr})

    }


    render() {
        return (
            <>
                <section className="benefits">
                    <h2 className="benefits__title">What can we do better than others?</h2>
                    <div className="benefits__container">
                        {this.state.arrBenefits.map((item, index) => (
                            <BenefitCard key={`ctgr_${index}`} img={item.img} title={item.title}
                                         content={item.shortContent}
                                         id={item.id}/>
                        ))}
                    </div>
                </section>
            </>
        );
    }
}

export default BenefitsClass;