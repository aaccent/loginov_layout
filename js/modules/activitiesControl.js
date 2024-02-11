export default () => {
    const activities = document.querySelectorAll('.activity');
    const isTablet = window.matchMedia('(max-width: 1199px)').matches;
    let limiter;

    if(activities.length < 1) return;

    isTablet ? (limiter = 5) : (limiter = 5);

    Array.from(activities).forEach( activity => {
        let activityItem = activity.querySelectorAll('.activity__list > li');
        let serviceWrapper = activity.querySelector('.activity__services-wrapper');
        let service = activity.querySelector('.activity__services');

        if(activityItem.length > limiter) {
            service.classList.add('activity__services--collapsed');
        } else {
            serviceWrapper.classList.add('activity__services-wrapper--full');
        }

        let expandBtn = activity.querySelector('.js-activity-expand');
        expandBtn.addEventListener('click', () => {
            expandBtn.closest('.activity__services').classList.toggle('activity__services--collapsed');
            let isExpand = !expandBtn.closest('.activity__services').classList.contains('activity__services--collapsed');
            isExpand ? ( expandBtn.dataset.text = 'Свернуть' ) : ( expandBtn.dataset.text = 'Показать все' );
        })
    })
}