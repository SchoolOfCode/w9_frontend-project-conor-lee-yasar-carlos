# API Data Structure

Structure of the data returned by API

## Usage

The API takes in the user id to retrieve the correct data by replacing `<user-id>`

There are four endpoint which allow you to GET, POST, DELETE and PATCH.

## GET

Returns all the days for the specified week number

`api/v1/<user-id>/weeks/<week-id>`

```JS
{
  code: 200,
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
          id: 'alpha',
          topic: 'string',
          rating: 'number',
          weekend: 'true',
          completed: 'boolean',
          comments: 'string'
        }
      ]
    },
  ]
}
```

## POST

Add a new comment which is linked to the task it belongs to.
The API will check if the task exists before creating an entry, if there is no match it returns 404.

`api/v1/<user-id>/weeks/<week-id>/<day>/<task-id>`

```JS
// object to POST
{
  comment: 'string'
}

// object received from POST success
{
  code: 200,
  message: 'Comment was added successfully'
}

// object received from POST when unable to create
{
  code: 404,
  message: 'Task <taskid> associated with comment not found'
}
```

## PATCH

Amends the data relating to the day in the url.
It taks a day object with all the day data. Only update the property of the object which are
changin and keep the rest the same.

`api/v1/<user-id>/weeks/<week-id>/<day>`

```JS
// object to POST
{
  code: 200,
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
          id: 'alpha',
          topic: 'string',
          rating: 'number',
          weekend: 'true',
          completed: 'boolean',
          comments: 'string'
        }
      ]
    }
  ]
}

// object received from POST success
{
  code: 200,
  message: 'Day was updated successfully'
}
```

## DELETE

Removes the comment from the related task by id.
Return 404 if task is not found.

`api/v1/<user-id>/weeks/<week-id>/<day>/<task-id>`

```js
// object received from POST success
{
  code: 200,
  message: 'Comment was deleted successfully from task'
}

// object received from POST when unable to create
{
  code: 404,
  message: 'Task <taskid> associated with comment not found'
}
```
