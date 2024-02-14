const { gql, default: request } = require("graphql-request");

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getAllCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists(first: 20, orderBy: createdAt_DESC) {
        id
        name
        tags
        totalChapters
        stage
        banner {
          url
        }
        free
        slug
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getSideBanner = async () => {
  const query = gql`
    query getSideBanner {
      sideBanners {
        id
        name
        banner {
          id
          url
        }
        url
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getCourseById = async (courseId) => {
  const query =
    gql`
    query MyQuery {
      courseList(where: { slug: "` +
    courseId +
    `" }) {
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
            videoLink
          }
        }
        description
        free
        id
        name
        slug
        sourceCode
        tags
        totalChapters
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const enrollToCourse = async (courseId, email) => {
  const query =
    gql`
    mutation MyMutation {
      createUserEnrollCourse(
        data: {courseId: "` +
    courseId +
    `", courseList: {connect: {slug: "` +
    courseId +
    `"}}, userEmail: "` +
    email +
    `"}
      ) {
        courseId
        id
      }
      publishManyUserEnrollCoursesConnection {
        edges {
          node {
            id
          }
        }
      }
    }
    
 `;
  const result = await request(MASTER_URL, query);
  return result;
};

const checkUserEnrollToCourse = async (courseId, email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(
        where: { courseId: "` +
    courseId +
    `", userEmail: "` +
    email +
    `" }
      ) {
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getUserEnrollCourse = async (id, email) => {
  const query =
    gql`
    query MyQuery {
      userEnrollCourses(
        where: {
          id: "` +
    id +
    `"
          userEmail: "` +
    email +
    `"
        }
      ) {
        courseId
        id
        userEmail
        completedChapter {
          ... on CompletedChapter {
            id
            chapterId
          }
        }
        courseList {
          banner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              stage
              video {
                url
              }
              videoLink
            }
          }
          description
          free
          id
          name
          slug
          sourceCode
          totalChapters
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const markChapterComplete = async (enrollId, chapterId) => {
  const query =
    gql`
  mutation MyMutation {
    updateUserEnrollCourse(
      data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "` +
    chapterId +
    `"}}}}}
      where: {id: "` +
    enrollId +
    `"}
    )
    {
      id
    }
    publishUserEnrollCourse(where: {id: "` +
    enrollId +
    `"}){
      id
    }
  }`;
  const result = await request(MASTER_URL, query);
  return result;
};

const getUserEnrolledCourse = async (email) => {
  const query =
    gql`
  query MyQuery {
    userEnrollCourses(where: {userEmail: "` +
    email +
    `"}) {
      completedChapter {
        ... on CompletedChapter {
          id
          chapterId
        }
      }
      courseId
      courseList {
        id
        name
        totalChapters
        sourceCode
        slug
        free
        description
        chapter(first:50) {
          ... on Chapter {
            id
            name
          }
        }
        banner {
          url
        }
      }
    }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getAllCourseList,
  getSideBanner,
  getCourseById,
  enrollToCourse,
  checkUserEnrollToCourse,
  getUserEnrollCourse,
  markChapterComplete,
  getUserEnrolledCourse,
};
