//<-------------------PAGE 6 STARTED------------------->
         
let currentIndex = 1;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;



document.getElementById('prevBtn').addEventListener('click', showPreviousReview);
document.getElementById('nextBtn').addEventListener('click', showNextReview);
document.getElementById('writeReview').addEventListener('click', showWriteReview);


// Function to jump directly to the show PREVIOUS Review slide
function showPreviousReview() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalReviews - 1;
    }
    updateReviewPosition();
}

// Function to jump directly to the show NEXT Review slide
function showNextReview() {
    if (currentIndex < totalReviews - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateReviewPosition();
}


// Function to jump directly to the Write Review slide
function showWriteReview() {
    currentIndex = totalReviews - 1;
    updateReviewPosition();
}

function updateReviewPosition() {
    const offset = -currentIndex * 100;
    document.querySelector('.reviews').style.transform = `translateX(${offset}%)`;
}
// function seeMore() {
//     const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
//     hiddenItems.forEach((item, index) => {
//       if (index < 4) { // Show 4 hidden items at a time
//         item.classList.remove('hidden');
//       }
//     });
  
//     // Hide the "See More" button if all items are visible
//     if (document.querySelectorAll('.gallery-item.hidden').length === 0) {
//       document.querySelector('.see-more-btn').style.display = 'none';
//     }
//   }



//   see more button


const galleryView = document.querySelector('.gallery-box');

document.getElementById('seeMore').addEventListener('click', seeMore);
const seeMorebtn = document.querySelector('#seeMore');

document.getElementById('seeLess').addEventListener('click', seeLess);
const seeLessbtn = document.querySelector('#seeLess');


function seeMore() {
    galleryView.style.height = "auto";
    seeMorebtn.style.display="none"
     seeLessbtn.style.display="block"
}

// Function to jump directly to the show NEXT Review slide
function seeLess() {
  
    
     galleryView.style.height = "25rem";
     seeLessbtn.style.display="none"
     seeMorebtn.style.display="block"

}
