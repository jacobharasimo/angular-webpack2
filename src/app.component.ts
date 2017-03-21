export const AppComponent: angular.IComponentOptions = {
    template: `
    <!-- Fixed navbar -->
    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
  <div class="container">
    <div class="navbar-header">
      <button type="button"
              class="navbar-toggle">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand visible-xs" href="#">Blueprint</a>
    </div>
    <nav class="hidden-xs">
      <a href="#top" role="button" class="navbar-brand">
        Blueprint
      </a>
      <ul class="nav navbar-nav">
        <li>
          <a ui-sref="app">
            Home
          </a>
        </li>
        <li>
          <a ui-sref="aside.bigData">
            Big Data
          </a>
        </li>
      </ul>
    </nav>
  </div>
</nav>
    <main role="main" class="main full-height" ui-view="content"></main>
  `
};
