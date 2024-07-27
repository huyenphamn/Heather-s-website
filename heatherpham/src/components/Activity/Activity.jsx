import React from "react"
import activity from "../../data/activity.json"
import styles from "./Activity.module.css"
import { getImageUrl } from "../../util";

export const Activity = () => {
    return (<section id="activity" className={styles.container}>
        <h2 className={styles.title}>Activity</h2>
        <div className={styles.content}>
            <ul className={styles.activity}>
                {
                    activity.map((activity, id) => {
                        return(<li key={id} className={styles.activityItem}>
                            <img src={getImageUrl(activity.imageSrc)} alt={`${activity.organisation} Logo`} className={styles.imageContainer}/>
                            <div className={styles.activityItemDetail}>
                                <h3>{`${activity.role}, ${activity.organisation}`}</h3>
                                <p>
                                {`${activity.startDate} - ${activity.endDate}`}
                                </p>
                                <ul>
                                {
                    activity.experiences.map((experience, id) => {
                        return(<li key={id}>{experience}</li>)})
                            }
                                </ul>
                            </div>
                        </li>
                    )})
                }
            </ul>
        </div>
    </section>);
};