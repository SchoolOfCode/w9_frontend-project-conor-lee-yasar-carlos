import React from "react";
import ResourceItem from "./ResourceItem/ResourceItem";

// renders a list of item which represent the days tasks
// props: resourceData are the list of tasks for the day
function ResourceList({
  resourceData,
}) {
    return (
        <div>
          <div className="h2">
            <h2>Resources</h2>
          </div>
          {resourceData.map((input) => {
            return (
              <ResourceItem
                key={input.id}
                data={input.topic}
                link={input.url}
              />
            );
          })}
        </div>
    );
  }

export default ResourceList;
