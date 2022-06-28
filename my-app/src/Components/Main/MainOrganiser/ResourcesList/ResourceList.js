import React from "react";
import ResourceItem from "./ResourceItem/ResourceItem";

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
