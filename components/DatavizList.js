import styles from "./DatavizList.module.css";

const DataVizList = ({ list }) => {
  return (
    <div className={styles.list}>
      {list.map((item, index) => (
        <div key={index} className={styles.item}>
          <img
            className={styles.image}
            src={item.field_dataviz_img[0].url}
            alt={item.field_dataviz_img[0].alt}
          />
          <div className={styles.description}>
            <div
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: item.field_dataviz_title[0].value,
              }}
            />
            <div className={styles.content}>
              <p>
                <strong>Owner: </strong> {item.field_dataviz_owner[0].value}
              </p>
              <p>
                <strong>Country: </strong> {item.field_dataviz_country[0].value}
              </p>
              {item.field_dataviz_prize[0].value ? (
                <p>
                  <strong>Prize: </strong>
                  {item.field_dataviz_rankedprize[0].value}
                </p>
              ) : null}

              <a href={item.field_dataviz_button[0].uri} target="_blank">
                {item.field_dataviz_button[0].title}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataVizList;
