import {Card} from "../../containers/Card/Card";
import {Markup} from 'interweave';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const RecipeInformation = () => {

    // Redux recipeInformation
    const recipeInformation = useSelector(state => state.recipeInformationSlice.recipeInformation),
        recipeSummary = recipeInformation.summary;

    return <Card className="flexbox flexbox-col">
        <figure>
            <img className="responsive-img" id={recipeInformation.id} src={recipeInformation.image}
                 alt="here Image Alt"/>
            <figcaption className="spacing-top10">
                <h3>{recipeInformation.title}</h3>
                <p><Markup content={recipeSummary}/></p>
            </figcaption>
        </figure>
    </Card>
}

export {RecipeInformation}
