import { useEffect, useState } from "react";

function Fetch(url) {
  const [datas, setDatas] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((datas) => {
        setDatas(datas);
        setLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);

  return [datas, loading];
}

export default Fetch;
