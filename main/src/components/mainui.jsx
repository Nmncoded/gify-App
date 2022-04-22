import Loader from "./loader";

export default function MainUI(props) {
  let { mainData } = props;
  if (!mainData.length) {
    return <Loader />;
  }
//   console.log(mainData);
  return (
    <article className="main-gif-ui">
      <ul className="all-gifs" >
        {
          mainData.map((gif, index) => {
          return (
            <li key={index} className="single-gif" >
                <img src={gif.images.preview_gif.url} alt={gif.username} />
                <h1 className="gif-title" >{gif.title}</h1>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
