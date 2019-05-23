// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    GET_ITEMS: "GET_ITEMS",
    GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  const getItems = () => ({
    type: Types.GET_ITEMS
  });
  
  export default {
    createItem,
    deleteItem,
    getItems,
    Types
  };