function checkTagToRemove( tags ) {
    var removeTags = [ 'Просмотрено', 'Отложено' ]
    var tagFound = false;
    removeTags.forEach( function( removeTag ) {
        if ( tags.includes( removeTag ) ) {
            console.log( 'found ' + removeTag );
            tagFound = true; 
        }
    });
    return tagFound;
}

var timerId = setInterval( function() {
    var tags = document.getElementsByClassName( 'ui_rmenu_subitem' );
    for ( idx = 0; idx < tags.length; ++idx ) {
        if ( checkTagToRemove( tags[ idx ].innerText ) ) {
            if ( tags[ idx ].classList.contains( 'ui_rmenu_item_sel' ) ) {
                return;
            }
        }
    }
    console.log( 'Begin clear procedure' );
    var bookmarks = document.getElementsByClassName( 'bookmark_block' );
    for ( idx = 0; idx < bookmarks.length; ++idx ) {
        var footer = bookmarks[ idx ].lastElementChild.innerText;
        console.log( 'check ' + footer );
        if ( checkTagToRemove( footer ) ) {
            console.log( bookmarks[ idx ] );
            bookmarks[ idx ].parentNode.removeChild( bookmarks[ idx ] );
        } else {
            console.log( 'nothing to delete...' )
        }
    }
}, 2000 );
