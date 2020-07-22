const result_area = document.getElementById('result_area');

function boxShadow_generator() {
    const bs_x = document.getElementById('bs_x').value;
    const bs_y = document.getElementById('bs_y').value;
    const bs_b = document.getElementById('bs_b').value;
    const bs_s = document.getElementById('bs_s').value;
    const bs_c = document.getElementById('bs_c').value;
    result_area.style.boxShadow = bs_x + 'px ' + bs_y + 'px ' + bs_b + 'px ' + bs_s + 'px ' + bs_c;
    document.getElementById('txt_bs_x').innerHTML = bs_x;
    document.getElementById('txt_bs_y').innerHTML = bs_y;
    document.getElementById('txt_bs_b').innerHTML = bs_b;
    document.getElementById('txt_bs_s').innerHTML = bs_s;
    document.getElementById('txt_bs_c').innerHTML = bs_c;
    document.getElementById('code_width').innerHTML = 'box-shadow: ' + bs_x + 'px ' + bs_y + 'px ' + bs_b + 'px ' + bs_s + 'px ' + bs_c + ';';
}
function borderRadius_generator() {
    const borderRadius = document.getElementById('generator_borderRadius').value;
    result_area.style.borderRadius = borderRadius + 'px';
    document.getElementById('txt_borderRadius').innerHTML = borderRadius;
    document.getElementById('code_borderRadius').innerHTML = 'border-radius: ' + borderRadius + 'px;';
}
