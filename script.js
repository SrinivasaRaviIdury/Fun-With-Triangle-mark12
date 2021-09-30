// IsTriangle.html
const inputAngles = document.querySelectorAll('.input-angles');
const isTriangleBtn = document.querySelector('#istriangle-btn');
const outputMessage = document.querySelector('#outputMessage');

function sumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function typeOfTriangle(angle1, angle2, angle3) {
  if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    return 'Acute angled triangle';
  } else if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return 'Right angled triangle';
  } else {
    return 'Obtuse angled triangle';
  }
}

function isTriangle() {
  const sumOfAng = sumOfAngles(
    Number(inputAngles[0].value),
    Number(inputAngles[1].value),
    Number(inputAngles[2].value)
  );

  if (sumOfAng === 180) {
    const typeTriangle = typeOfTriangle(
      Number(inputAngles[0].value),
      Number(inputAngles[1].value),
      Number(inputAngles[2].value)
    );
    outputMessage.innerHTML = `Wow ${Number(inputAngles[0].value)},${Number(
      inputAngles[1].value
    )},${Number(inputAngles[2].value)} Angles Form ${typeTriangle} 🙂`;
  } else {
    outputMessage.innerHTML = 'Boom 3 Angles Not Form Triangle 🤔';
  }
}

isTriangleBtn.addEventListener('click', isTriangle);

//Quiz.html
