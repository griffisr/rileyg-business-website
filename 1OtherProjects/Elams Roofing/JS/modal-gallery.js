$(document).ready(function() {
    /* When clicking a thumbnail */
    $(".row .thumbnail").click(function(){
        var content = $(".carousel-inner");
        var title = $(".modal-title");

        // Clear existing carousel items
        content.empty();  

        // Clone and append carousel items
        var groupId = $(this).data("group-id"); // Get the group ID of the clicked thumbnail
        var repo = $("#img-repo .carousel-item[data-group-id='" + groupId + "']");
        var repoCopy = repo.clone();
        content.append(repoCopy);

        // Update modal title
        title.html(repoCopy.first().find("img").attr("title"));

        // Initialize the carousel
        $("#modal-carousel").carousel();

        // Add "active" class to the first item added to the carousel
        repoCopy.first().addClass("active");

        // Show the modal
        $("#modal-gallery").modal("show");
    });



    /* When clicking the button to open the modal */
    $(".open-modal").click(function(){
        var content = $(".carousel-inner");
        var title = $(".modal-title");

        // Clear existing carousel items
        content.empty();  

        // Get the group IDs from the button's data attribute
        var groupIds = $(this).data("group-id").split(" "); // Split the group IDs into an array
        // Clone and append carousel items for each group ID
        for (var i = 0; i < groupIds.length; i++) {
            var repo = $("#img-repo .carousel-item[data-group-id='" + groupIds[i] + "']");
            console.log(repo);
            var repoCopy = repo.clone();
            content.append(repoCopy);
            
        }

        // Update modal title
        title.html("All Photos");

        // Initialize the carousel
        $("#modal-carousel").carousel();
        
        // Add "active" class to the first item added to the carousel
        repoCopy.first().addClass("active");


        // Show the modal
        $("#modal-gallery").modal("show");
    });
});