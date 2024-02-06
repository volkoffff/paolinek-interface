import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import axiosInstance from "../../helper/AxiosInstance";
import "./Oeuvre.css";

export function Oeuvre() {
  const params = useParams();
  const [oeuvre, setOeuvre] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/oeuvres/${params.id}`)
      .then((response) => {
        // Gérer la réponse ici
        setOeuvre(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error("Error fetching collections:", error);
      });
  }, [params.id]);

  return (
    <>
      {isLoaded === false ? (
        <Loading />
      ) : (
        <>
          <div className="image-oeuvre-bg-outer">
            <img className="image-oeuvre-bg" src={oeuvre.image} alt="" />
          </div>

          <div className="section-oeuvre">
            <div className="image-oeuvre-outer">
              <img className="image-oeuvre" src={oeuvre.image} alt="" />
            </div>
            <div className="info-outer">
              <div className="info-header">
                <div className="anim-translate-container">
                  <h1 className="anim-translate delay-8 ml13">{oeuvre.name}</h1>
                </div>
                <div className="anim-translate-container">
                  {oeuvre.serie && (
                    <h2 className="anim-translate delay-11">
                      {oeuvre.serie.name}
                    </h2>
                  )}
                </div>
              </div>
              <div className="info-header-p-outer">
                <p>{oeuvre.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
