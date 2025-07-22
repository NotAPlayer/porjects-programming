$(function () {
    $(".task-list").sortable({
        connectWith: ".task-list",
        placeholder: "task-placeholder"
    }).disableSelection();
});
