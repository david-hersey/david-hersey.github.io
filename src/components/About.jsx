import React from 'react';
import Carousel from  './Carousel.jsx';

class About extends React.Component {
  render() {
    return (
      <div className='container mt-5'>
        <h1>About</h1>
        <Carousel images={['alton.png','warwick.png']} />
          <p>Spending nearly 15 years working on the websites and holiday booking solutions for the countries top theme parks....</p>
          <p>Phasellus porttitor ut dolor eu elementum. Quisque molestie ut augue nec semper. Suspendisse condimentum tristique est nec congue. Vivamus dictum, justo ut rhoncus pharetra, est justo tincidunt turpis, ac pretium ex sapien sed nisl. Mauris vitae erat orci. Maecenas aliquam suscipit arcu, et mollis nisl finibus dictum. Vivamus ullamcorper, felis id porttitor efficitur, urna nisl ultricies erat, aliquet tincidunt nisl dolor eu libero. Praesent vestibulum imperdiet feugiat. Sed nec eros venenatis, faucibus nisi id, semper turpis. Sed metus ex, porta eu sollicitudin in, iaculis id augue. Praesent ultricies urna in lacus luctus finibus. Morbi dapibus enim eros, quis efficitur metus consectetur ut.</p>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin laoreet ante in ullamcorper gravida. Suspendisse tempus elit purus, sit amet congue dui aliquet eget. Aliquam vitae lorem scelerisque, dapibus sapien id, eleifend urna. Donec ligula eros, hendrerit in laoreet sed, lacinia eget urna. Cras non ligula sem. Donec non diam arcu.</p>
          <p>Vivamus accumsan tincidunt erat vitae venenatis. Vivamus et cursus leo. Etiam vehicula enim at consequat dapibus. Praesent commodo, nisi in vestibulum finibus, nibh sem dignissim ex, non aliquam enim dolor ut ligula. Mauris maximus vulputate augue eget sagittis. Ut ultrices scelerisque semper. Vivamus ultricies feugiat dui non mattis.</p>
          <p>Ut ut nunc nunc. Nam tempor eros a tellus tincidunt, eu condimentum massa eleifend. In hac habitasse platea dictumst. Sed nec hendrerit dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse elementum justo eget quam laoreet mattis. Aliquam vestibulum augue sed odio tincidunt ultrices. Sed ut velit ac ipsum pulvinar imperdiet. Nam purus tellus, pellentesque nec lectus accumsan, ultrices viverra arcu. Curabitur vitae sem quis mi ornare finibus volutpat ut nisi. Suspendisse potenti. Nunc congue, massa eget dictum aliquet, tortor nisl dictum lorem, sed placerat mauris est vel est. Curabitur ut massa vel metus bibendum rutrum sit amet sit amet justo. Donec dapibus lectus ut dapibus lobortis.</p>
      </div>
    )
  }
}

export default About;
