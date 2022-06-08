import styles from './Mutant.module.css';
import ninja1 from '../../../assets/images/ninja1.svg';
import ninja2 from '../../../assets/images/ninja2.svg';
import ninja3 from '../../../assets/images/ninja3.svg';

export function Mutant({mutant, content}) {
    
    const verifyMutant = () => {
        if(mutant === "Senior"){
            return <img className={styles.mutant} src={ninja1} alt="mutant" />
        }
        if(mutant === "Junior"){
            return <img className={styles.mutant} src={ninja2} alt="mutant" /> 
        }
        if(mutant === "Mestre"){
            return <img  className={styles.mutant} src={ninja3} alt="mutant" /> 
        }
        return null; 
    }

    return (
        <div className={styles.Mutantcontainer}>
            <div className={styles.content}>
                <h4>Mutant: </h4> 
                <span>{mutant}</span>
                { 
                verifyMutant() 
                }
            </div>
        </div>
    )
}