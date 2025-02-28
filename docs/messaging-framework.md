# Messaging Framework

We’ve created a framework to help you craft friendlier and more useful messages for empty states (with and without illustrations), using formulas that are consistent with the conversational tone of Fiori’s personality.

**How to create and implement a Fiori moment:**

1. First, figure out what type of message you’re creating.
2. Once you know what type of message you need, look up similar messages in the following tables. Each entry includes a headline, a description that includes a course of action, and additional tips if necessary.

## Empty States: No data
There’s no data that user can see.

*Available with illustration:*

| **Use-cases**    | **Copy Suggestions** |
| --- | --- |
| No notifications | *Example*:<br>**Nothing new here**<br>Check back again later.<br>*(if possible, add a call-to-action via link or button on second line)* |
| No inbox | *Example*:<br>**There’s no mail in your inbox** <br>Check back again later.<br>*(if possible, add a call-to-action via link or button on second line)* |

*Messaging only:*
| **Use-cases** | **Copy Suggestions** |
| --- | --- |
| No products/ items | *Example*:<br>**There are no** **[ things ]** **yet** <br>When there are, they’ll show up here.<br>*(where* things *represents the objects that aren’t here yet)* |
| No classes/ learnings/ tutorials  | *Example*:<br>**Looks like there are no** **[ things ]** **yet** <br>When there are, they’ll show up here. |
| No history | *Example*:<br>**There is no history yet** <br>When there is, you’ll see it here. |
| No feeds | *Example*:<br>**Looks like there are no feeds yet** <br>When there are, you’ll see them here.|
| No images/ videos | *Example*:<br>**There are no** **[ things ]** **yet** <br>When there are, they’ll show up here. |
| No preview | *Example*:<br>**There is nothing to preview yet** <br>When there is, you’ll see it here.<br><br>*This one is a little different, because it’s more like an action that can’t be performed yet, rather than a thing that cannot be seen yet. We can’t see a preview because there’s nothing to preview yet. We can use a similar formula for situations like this: “There is nothing to [preview, display, show, or other verb] yet. When there is, you’ll see it here.”* |
| Nothing in your cart (FE example) | *Example*:<br>**There is nothing in your cart** <br>When there is, you’ll see it here. |

## Empty States: Error
Unable to display information.

*Available with illustration:*

| **Use-cases** | **Copy Suggestions** |
| --- | --- |
| No data: Unable to load | *Example*:<br>**Looks like the data isn’t loading**<br>This can happen if you aren’t connected to the internet, or if an underlying system or component is unavailable. Check with your administrator.<br><br>*If possible, provide a brief explanation and a possible course of action as above. Try to keep messages as brief as possible. Here, we could provide suggestions in the form of questions to make them more conversational: “Are you online? Are all of the system’s components available? Check with your administrator.”* |
| No search results / No ‘filter results’ (includes a search bar but is mostly a filter. | *Example*:<br>**No results for those criteria** <br>Maybe try another filter or a search term?<br><br>*The nice thing about using the word “criteria” is that it could be applied to both filters AND search terms, so we could create a message that works for all situations, such as the above example.* |

*Messaging only:*

| **Use-cases** | **Copy Suggestions** |
| --- | --- |
| Unable to upload | *Examples*:<br>**We’re having trouble uploading** <br>Could be a connection problem. Or maybe you’re uploading the wrong file type.<br><br>**Looks like we can't upload** <br>Could be a connection problem. Or, if that's not it, maybe you've got the wrong file type?<br><br>**We’re having trouble uploading** <br>Check your connection. If it's fine, make sure you're uploading the correct file type.<br><br>*These are several possibilities with slightly different conversational elements. You could use the first sentence for the larger message, and the following sentences for the follow-up action suggestion. And if you want to emphasize that this is only a temporary issue, you could add a “right now” in there. For example, “We’re having trouble uploading right now. Could be a connection problem. Or maybe you’re uploading the wrong file type?”* |


## Empty States: No user activity
User has not perform an action so there’s nothing to show; User has just completed a task or workflow, or has cleared all data. This should pair with CTA button when it’s appropriate.

*Available with illustration:*

| **Use-cases** | **Copy Suggestions** |
| --- | --- |
| No data in cards: Nothing has been created | *Formula*: <br>**Looks like no [ things ] have been [ verbed ]**<br><br>*Example*:<br>**Looks like no items have been created**<br>Check back again later.<br><br>*Can follow with an appropriate action as the secondary message, such as “Check back again later.”*<br>*The nouns and verbs you use here really depend on the situation, but here are some examples to give you an idea:*<br><br>*- **Looks like no reports have been submitted** <br>Check back again later.*<br>*- **Looks like no sales have been processed** <br>Check back again later.*<br><br>*Example:*<br>***There is no data yet*** <br>*When there is, it’ll show up here.*<br><br>*For a bit of conversational variety, you can also add “Looks like” to the beginning of these messages, or use “you’ll see them here” instead of “they’ll show up here”.* |
| No entry/entries on lists/tables | *Formula*:<br>**There is no [thing] yet** <br>When there is, it will show up here.<br><br>*Formula (plural)*:<br>**There are no [things] yet** <br>When there are, they’ll show up here.<br><br>*For a bit of conversational variety, you can also add “Looks like” to the beginning of these messages, or use “you’ll see them here” instead of “they’ll show up here”.* |
| No activities | *For all of these empty states, follow the formula*: <br>**You haven’t [ done/received something ] yet** <br>When you do, you’ll see it here.<br><br>*Example*:<br>**You haven’t added any meetings/activities yet** <br>When you do, they’ll show up here. |
| No tasks | **You’re all caught up!** <br>When you add a task, it’ll show up here. |
| No entries/ items/ accounts added yet | *Formula*:<br>**You don’t have any [ entries/items/accounts ] yet** <br>When you do, you’ll see them here. |
| No saved/ starred items added yet <br>“Favorites” (check to see what word is being used to align across LOBs) | **You haven't saved any items yet** <br>When you do, they'll show up here.<br><br>**You haven’t saved or starred any items yet** <br>When you do, you'll see them here. |

*Messaging only:*

| **Use-cases** | **Copy Suggestions** |
| --- | --- |
| No feedback received/sent | **You haven't received or sent any feedback yet** <br>When you do, it'll show up here.<br><br>**There isn’t any feedback for you to review yet** |

## Empty States: Initial interactions
The first time user/application encounters; Area is intentionally left blank for user to start an action; The user has only just signed up.

*Available with illustration:*

| **Use-cases** | **Copy Suggestions** |
| --- | --- |
| Before performing a search | *Formula*:<br>**Search for [ thing ] where [thing] is the type of document/item being searched for**<br><br>*Examples*:<br>**Let’s get some results**<br>Enter your search terms or choose filter settings.<br><br>Choose your filter settings or type in some search terms.<br><br>Enter some filter settings or search terms. |

*Messaging only:*
| **Use-cases** | **Copy Suggestions** |
| --- | --- |
| Create new report/ programs/ tables/ presentations/ pools | *Formula*:<br>**Create [ X ]**<br><br>*Like the search, use a simple imperative command here, accompanied by a + symbol, where X is the thing being created.* |

## Success States: General Use-case
Design a generic success modal that can be used in various contexts.

| **Use-cases** | **Copy Suggestions** |
| --- | --- |
| Generic celebration of an event. | *Formula*:<br>**Success! You created [ or added ] a [ thing ].**<br><br>**Great! You created a [ thing ].**<br><br>*Examples*:<br>**Perfect. You created a [ thing ].**<br><br>**Nicely done. You created a [ thing ].** <br><br>*It might be appropriate to have a short cheerful intro followed by a confirmation message describing the success. You may not be able to have a custom confirmation message for all of these situations, but I think it would be nice to have, to confirm that it really is a success, because I did what I was trying to do. “Success!” without a description is still cheerful and affirming, but doesn’t really tell me if I’ve done the right thing.*<br><br>*If you can’t include a message describing what the success involves, you could go more generic. Because this is a success state, there’s potential for doing something extra-cheerful here, since the reader has achieved what they set out to achieve, so they’re less likely to be annoyed by chattiness.*<br><br>*Examples*:<br>**Success!** <br>Time for a coffee break.<br><br>**Success!** <br>Life is full of small perfect moments.<br><br>**Success!** <br>We knew you could do it. |
