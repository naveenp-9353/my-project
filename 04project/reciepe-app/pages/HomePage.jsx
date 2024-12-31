import CardList from "../Components/CardList";
import Header from "../Components/Header";
import Loading from "../Components/Loading";

import useFetchRecipes from "../hooks/useFetchRecipes";
export default function HomePage() {

const[data,loading]=useFetchRecipes();
return (
<>
<Header />
{loading && <Loading/>}
{data && <CardList recipes={data} />}
</>
);
}