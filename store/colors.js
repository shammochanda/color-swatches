import { createSlice } from "@reduxjs/toolkit";

const initialColorState = {
  layerColors: [
    {
      num: 1,
      background: { r: "0", g: "0", b: "0", a: "1" },
      font: { r: "255", g: "255", b: "255", a: "1" },
      visible: true,
      parentLayer: null,
      hasChild: false,
      numChildren: 3,
    },
    {
      num: 2,
      background: { r: "0", g: "0", b: "0", a: "1" },
      font: { r: "255", g: "255", b: "255", a: "1" },
      visible: false,
      parentLayer: 1,
      hasChild: false,
      numChildren: 0,
    },
    {
      num: 3,
      background: { r: "0", g: "0", b: "0", a: "1" },
      font: { r: "255", g: "255", b: "255", a: "1" },
      visible: false,
      parentLayer: 1,
      hasChild: false,
      numChildren: 0,
    },
    {
      num: 4,
      background: { r: "0", g: "0", b: "0", a: "1" },
      font: { r: "255", g: "255", b: "255", a: "1" },
      visible: false,
      parentLayer: 1,
      hasChild: false,
      numChildren: 0,
    },
  ],
  layerNesting: { num: 1, children: [] },
};

const insertLayer = (parent, child, state) => {
  if (parent === 1) {
    state.layerNesting.children.push({ num: child, children: [] });
  } else {
    let i = 0;
    for (; i < state.layerNesting.children.length; i++) {
      if (state.layerNesting.children[i].num === parent) {
        state.layerNesting.children[i].children.push({
          num: child,
          children: [],
        });
        break;
      } else if (state.layerNesting.children[i].children.length !== 0) {
        if (state.layerNesting.children[i].children[0].num === parent) {
          state.layerNesting.children[i].children[0].children.push({
            num: child,
            children: [],
          });
          break;
        }
      }
    }
  }
};

const removeLayer = (parent, child, state) => {
  if (parent === 1) {
    let i = 0;
    for (; i < state.layerNesting["children"].length; i++) {
      if (state.layerNesting["children"][i]["num"] === child) {
        state.layerNesting["children"].splice(i, 1);
        return;
      }
    }
  } else {
    let i = 0;
    for (; i < state.layerNesting.children.length; i++) {
      if (state.layerNesting.children[i].num === parent) {
        let j = 0;
        for (; j < state.layerNesting["children"][i].children.length; j++) {
          if (
            state.layerNesting["children"][i]["children"][j]["num"] === child
          ) {
            state.layerNesting["children"][i]["children"].splice(j, 1);
            return;
          }
        }
        break;
      } else if (state.layerNesting.children[i].children.length !== 0) {
        if (state.layerNesting.children[i].children[0].num === parent) {
          state.layerNesting.children[i].children[0].children = [];
          return;
        }
      }
    }
  }
};

const colorSlice = createSlice({
  name: "color",
  initialState: initialColorState,
  reducers: {
    changeColor(state, action) {
      state.layerColors[action.payload.num][action.payload.bgOrFont][
        action.payload.color
      ] = action.payload.value;
    },
    changeVisibility(state, action) {
      if (action.payload.checked) {
        let parent = state.layerColors[action.payload.num]["parentLayer"]
        insertLayer(parent, action.payload.num + 1, state)
        // let prevParent = state.layerColors[action.payload.num]["parentLayer"];
        state.layerColors[parent - 1]["numChildren"] += 1;
        state.layerColors[parent - 1]["hasChild"] = true;
        //find the parentlayer
        //insert into children
        //set haschild, numchild for parent layer
      } else {
        let parent = state.layerColors[action.payload.num]["parentLayer"]
        removeLayer(parent, action.payload.num + 1, state)
        // let prevParent = state.layerColors[action.payload.num]["parentLayer"];
        if (state.layerColors[parent - 1]["numChildren"] === 1) {
          state.layerColors[parent - 1]["hasChild"] = false;
        }
        state.layerColors[parent - 1]["numChildren"] -= 1;
        //find parent layer
        //splice from children
        //set parent layers numchild and haschild accordingly
      }
      state.layerColors[action.payload.num]["visible"] = action.payload.checked;
      //if checked, insert into new thing

      //if not checked, remove from thing
      //set haschild, numchild for parent layer
    //   if (action.payload.checked) {
    //     state.layerNesting["children"].push({
    //       num: action.payload.num + 1,
    //       children: [],
    //     });
    //   } else {
    //     let i = 0;
    //     for (; i < state.layerNesting["children"].length; i++) {
    //       if (
    //         state.layerNesting["children"][i]["num"] ===
    //         action.payload.num + 1
    //       ) {
    //         state.layerNesting["children"].splice(i, 1);
    //         break;
    //       }
    //     }
    //   }
    },
    changeParent(state, action) {
      if (state.layerColors[action.payload.num]["visible"]) {
        let parent = state.layerColors[action.payload.num]["parentLayer"]
        removeLayer(parent, action.payload.num + 1, state)
        let prevParent = state.layerColors[action.payload.num]["parentLayer"];
        if (state.layerColors[parent - 1]["numChildren"] === 1) {
          state.layerColors[parent - 1]["hasChild"] = false;
        }
        state.layerColors[parent - 1]["numChildren"] -= 1;

        state.layerColors[action.payload.num]["parentLayer"] =
          action.payload.parent;
        insertLayer(action.payload.parent, action.payload.num + 1, state)
        state.layerColors[action.payload.parent - 1]["hasChild"] = true;
        state.layerColors[action.payload.parent - 1]["numChildren"] += 1;
        //if visible NEED TO SPLICE AND INSERT and do all the other stuff
      }
      state.layerColors[action.payload.num]["parentLayer"] =
        action.payload.parent;
    },
  },
});

export const colorActions = colorSlice.actions;

export default colorSlice.reducer;
