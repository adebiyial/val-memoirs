## Objective

This task is designed to provide an opportunity for you to demonstrate general
frontend and design knowledge in the sense that you:

1. can write clean, structured, readable and maintainable code,
2. can communicate ideas with good design,
3. can work with APIs,
4. are proficient with the React framework.

## The Task

Valentines Day was a couple of weeks ago and several people had awesome memories
from the day. Your task is to create a fictional site called "Val Memoirs" where
people can share their experiences with the public.

## Requirements

The Webpage

1. What it will look like (the UI), is all up to you.
2. The site should display a slideshow of five(5) awesome images, all of which
   must be fetched via the Unsplash API using relevant search parameters.
3. The site should guide people on how to share their stories.
4. There should be a call-to-action (CTA) to add a story.
5. The site should display stories that have been shared by people.
6. The story should have a character limit of 100 and should have a view more
   button.
7. Each story should show total number of likes along with a like button.

## Webpage Interactivity using Javascript (React)

1. When a user clicks on the CTA to add a story, a form should be presented via
   a pop-up modal with the following form fields: first name, last name,
   username, gender, headline and story.
2. There should be a CTA to save a story.
3. When the save button is clicked, the story should be added to the list of
   stories and immediately rendered along with the preloaded (and saved)
   stories.
4. You should ensure that no user can post more than one (1) story, using their
   usernames for validation.
5. Each story should be likeable unlimited amount of times by anybody.
6. When the page is reloaded, the stories should be restored to the default
   amount provided initially.
7. When the view more button is clicked, the entire details for the story should
   be presented in a pop-up.

## Note:

For implementing the design, you have the liberty to use any UI framework of
your choice - if you need to. But we’re on the lookout for SCSS.

## Submission

The final project should be hosted on Github and deployed on either of Github
Pages, Heroku or Netlify. Provide the links to the repo as well as the live
version when you’re done. We encourage you to set up the repo and commit
properly to it while you work, rather than upload at once when you're done.

---

### For my sanity

Home page

1. The site should display stories that have been shared by other people.
   1. There should be a total of 5 images
      1. A story has the properties:
         1. image
         2. author
         3. description
            1. char limit of 100
            2. a view more button
               1. when clicked, show details about this story
         4. total number of likes and a like button
         5. the likes should increment forever when clicked
   2. Should also contain a CTA to add a story
2. When CTA to add a story is clicked, show a form in a modal

   1. Form properties
      1. First name,
      2. last name
      3. username
      4. gender
      5. headline
      6. story
   2. The form will have a save story button
   3. When a story is saved, prepend to the list of stories on homepage (and
      rerender - change state - so it shows up immediately)
   4. Limit a story to per username (one username, one story)

3. On page reload, go back to Homepage default
