import { userState } from "../atoms/user";
import {selector} from "recoil";
import { courseState } from "../atoms/course";

// must define a selector for each recoil state
export const isCourseLoading = selector({
  //  this is a unique key to identify the seletor
  key: 'isCourseLoaingState',
  // in ths get key:value pair we get the get callback func in which we must pass the atom state which we need to update.
  get: ({get}) => {
    const state = get(courseState);
    return state.isLoading;
  },
});

export const courseDetails = selector({
  key: 'courseDetailsState',
  get: ({get}) => {
    const state = get(courseState);

    return state.course;
  },
});

export const courseTitle = selector({
  key: 'courseTitleState',
  get: ({get}) => {
    const state = get(courseState);
    if (state.course) {
        return state.course.title;
    }
    return "";
  },
});

export const coursePrice = selector({
  key: 'coursePriceState',
  get: ({get}) => {
    const state = get(courseState);
    if (state.course) {
        return state.course.price;
    }
    return "";
  },
});

export const courseImage = selector({
  key: 'courseImageState',
  get: ({get}) => {
    const state = get(courseState);
    if (state.course) {
        return state.course.image;
    }
    return "";
  },
});

