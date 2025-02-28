---
sidebar: false
groups:
- header: "Empty States: No data"
  items:
  - title: "No Notifications"
    status: ["","done","",""]
  - title: "No Inbox"
    status: ["","done","","done"]
- header: "Empty States: No user activity"
  items:
  - title: "No Data: Nothing has been created"
    status: ["","done","","done"]
  - title: "No Entry/Entries on lists/tables"
    status: ["","done","",""]
  - title: "No Activities"
    status: ["","done","",""]
  - title: "No Tasks"
    status: ["","done","",""]
  - title: "No Entries/Items/Accounts added yet"
    status: ["","done","",""]
  - title: "No Saved/Starred Items added yet "
    status: ["","done","","done"]
- header: "Empty States: Initial interactions"
  items:
  - title: "Before performing a search"
    status: ["","done","done","done"]
- header: "Empty States: Error"
  items:
  - title: "No Data: Unable to Load"
    status: ["","done","","done"]
  - title: "No Search/Filter Results"
    status: ["","done","done","done"]
  - title: "Unable to upload"
    status: ["","done","",""]
- header: "Success States: General use case"
  items:
  - title: "Version 1 (checkmark)"
    status: ["","done","done",""]
  - title: "Version 2 (high-five)"
    status: ["","","done",""]
  - title: "Version 3 (balloon)"
    status: ["","","done",""]
---

# Component Status

<StatusTable :groups="$page.frontmatter.groups" />
