function calculateAverage() {
    var grades = [80, 75, 85, 90, 95];
    var total = grades.reduce(function(acc, grade) {
        return acc + grade;
    }, 0);
    var average = total / grades.length;

    document.getElementById('average').innerHTML = "Average Grade: " + average.toFixed(2);
}
