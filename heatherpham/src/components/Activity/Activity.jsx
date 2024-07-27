import React from "react"
import activity from "../../data/activityOrg.json"

export const Activity = () => {
    return (<section id="activity">
        <h2>Activity</h2>
        <div>
            <div>
                {
                    activity.map((activity, id) => {
                        return <div>
                            
                        </div>
                    })
                }
            </div>
            <ul></ul>
        </div>
    </section>);
};