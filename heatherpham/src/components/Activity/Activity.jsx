import React from "react"
import activity from "../../data/activity.json"
import styles from "./Activity.module.css"
import { getImageUrl } from "../../util";

export const Activity = () => {
    return (<section id="activity" className={styles.container}>
        <h2 className={styles.title}>Activity</h2>
        <div className={styles.content}>
            <ul>
                {
                    activity.map((activity, id) => {
                        return <li key={id}>
                            <div><img src={getImageUrl(activity.imageSrc)} alt={`${activity.organisation} Logo`}/>
                                <h3>{`${activity.role}, ${activity.organisation}`}</h3>
                                <p>
                                {`${activity.startDate} - ${activity.endDate}`}
                                </p>
                                <ul>
                                {
                    activity.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>})
                            }
                                </ul>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>);
};