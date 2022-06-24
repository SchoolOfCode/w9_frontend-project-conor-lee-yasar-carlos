# API Data Structure

A contract of the data structure returned by API.

## Usage

The API takes in the user id to retrieve the data relating to said user.

### Endpoints

- GET
  `api/v1/<user_id>/<week_number>`

- POST
  `api/v1/<user_id>/<week_number>/<day_number>/comment/<task_id>`

- PATCH
  _update task unique comment_
  `api/v1/<user_id>/<week_number>/<day_number>/comment/<task_id>`
  _update task meta_
  `api/v1/<user_id>/<week_number>/<day_number>/task/<task_id>`
  _update resource meta_
  `api/v1/<user_id>/<week_number>/<day_number>/resource/<resource_id>`

## GET

---

Returns all the days for the specified week number.
Payload is an array of objects. Each object represents a day in the week.

`api/v1/<user_id>/<week_number>`

```JS
{
  success: true,
  payload: [
    {
      day: 1,
      resouces: [
        {
          id: 'number',
          topic: 'string',
          url: 'string',
          rating: 'boolen'
        }
      ],
      list: [
        {
          id: 'number',
          topic: 'string',
          rating: 'number',
          weekend: 'boolean',
          completed: 'boolean',
          comments: 'string'
        }
      ]
    },
  ]
}
```

## POST

---

Add a new comment to a specific task.
The API will check if the task exists before creating an entry.
An object is returned for both success or failure.

`api/v1/<user_id>/<week_number>/<day_number>/comment/<task_id>`

```JS
// object to POST
{
  comment: 'string'
}

// object received from POST success
{
  success: true,
  message: 'Comments successfully added'
}

// object received from POST when unable to create
{
  success: false,
  message: 'Unable to add comment'
}
```

## PATCH task comment

---

Amends the comment for the specified task.

`api/v1/<user_id>/<week_number>/<day_number>/comment/<task_id>`

```JS
// object to POST
{
  comment: 'string'
}

// object received from POST success
{
  success: true,
  message: 'Comments successfully added'
}

// object received from POST when unable to update
{
  success: false,
  message: 'Unable to add comment'
}
```

## PATCH - task metadata

---

Amends the metadata for the specified task.

`api/v1/<user_id>/<week_number>/<day_number>/task/<task_id>`

```JS
// object to POST
{
  rating: 'number',
  weekend: 'true',
  completed: 'boolean',
}

// object received from POST success
{
  success: true,
  message: 'Task metadata updated successfully'
}

// object received from POST when unable update the metadata
{
  success: false,
  message: 'Unable to update the task metadata'
}
```

## PATCH - resource metadata

---

Amends the metadata for a single resource.

`api/v1/<user_id>/<week_number>/<day_number>/resource/<resources_id>`

```JS
// object to POST
{
  rating: 'boolean'
}

// object received from POST success
{
  success: true,
  message: 'Resource metadata updated successfully'
}

// object received from POST when unable to update the metadata
{
  success: false,
  message: 'Unable to update the resource metadata'
}
```
