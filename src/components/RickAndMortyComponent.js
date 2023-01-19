import {findAllByDisplayValue} from "@testing-library/react";
export default function RickAndMortyComponent(props){
    console.log(props);
    let {id,name,status,species,gender,image}=props;
    let classNameItem01='character';
    return(
        <div className={classNameItem01}>
            <h2>{name}</h2>
            <img src={image}/>
            <p>{id}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
        </div>
    )
}