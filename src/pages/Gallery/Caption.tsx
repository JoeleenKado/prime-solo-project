import { filterObject } from "filestack-js";
import React from "react";
import { connect, useDispatch } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./Gallery.css";

interface IProps {
  history: any;
  artwork: any;
  store: any;
}
type Entry<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T]


const Caption: import('react').FunctionComponent<IProps> = ({history, artwork, store}) => {
  const dispatch = useDispatch();
  const { title, size, medium, id, statement, url, like } = artwork;
  const { friendly } = store;
  const encodedUrl = encodeURIComponent(url);
  function filterObject<T extends object>(
    obj: T, 
    fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean
) {
  return Object.fromEntries(
    (Object.entries(obj) as Entry<T>[]).filter(fn)
  ) as Partial<T>
}
    //  predicate) =>
    // Object.keys(obj)
    //   .filter((key) => predicate(obj[key]))
    //   .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {});

  const filtered = filterObject(artwork, ([k, v]) => v === "");
  function filter(obj: any) {
    Object.keys(obj).forEach(function (key) {
      obj[key] = "NA";
    });
    return Object.assign(artwork, filtered);
  }
  const filteredArtwork = filter(filtered);
  console.log("1st half of url:", url.slice(0, 32));
  console.log("2nd half of url:", url.slice(32));
  console.log("encodedURL:", encodedUrl);
  console.log("filteredArtwork.size:", filteredArtwork.size);
  function likeFunction(e) {
    e.preventDefault();
    dispatch({ type: "LIKE", payload: id });
  }
  function toggleAccordion(e) {
    const content = e.target.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    // console.log("target:", e.target);
    // console.log("content:", content);
    // let element = document.getElementsByClassName("flip-card-inner");
    // console.log("element:", element);
  }
  return (
    <>
      <div className="stone">
        <label
          id="text-plate"
          className="accordion"
          onClick={(e) => toggleAccordion(e)}
        >
          {title}
        </label>
        <div className="accordion-content">
          <article>
            {friendly ? null : (
              <>
                {like} Like(s)!
                <br />
              </>
            )}
            {medium}
            <br />
            {size}
            <br />
            <p>{statement}</p>
            {friendly ? (
              <button onClick={(e) => likeFunction(e)}>Like</button>
            ) : (
              <button
                onClick={() =>
                  history.push(
                    `edit/${filteredArtwork.title}/${filteredArtwork.medium}/${filteredArtwork.size}/${filteredArtwork.statement}/${encodedUrl}/${id}`
                  )
                }
              >
                EDIT
              </button>
            )}
          </article>
        </div>
      </div>
    </>
  ); //END return
}; //END Caption
export default connect(mapStoreToProps)(Caption);
