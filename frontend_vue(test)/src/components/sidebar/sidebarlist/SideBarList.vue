<template>
    <div id='SideBarList'>
        <ul class='nav-links'>
            <li>
                <side-bar-list-item>
                    <a href="#" slot='linker'>
                        <i class='bx bx-pie-chart-alt-2' ></i>
                        <span class="link_name">Analytics</span>
                    </a>
                    <ul class="sub-menu blank" slot='childlist'>
                        <li><a class="link_name" href="#">Analytics</a></li>
                    </ul>
                </side-bar-list-item>
            </li>
            <li>
                <side-bar-list-item>
                    <a href="#" slot='linker'>
                        <i class='bx bx-line-chart' ></i>
                        <span class="link_name">Chart</span>
                      </a>
                      <ul class="sub-menu blank" slot='childlist'>
                        <li><a class="link_name" href="#">Chart</a></li>
                      </ul>
                </side-bar-list-item>
            </li>
            <li>
                <side-bar-list-item>
                    <div class="iocn-link" slot='linker'>
                        <a href="#">
                          <i class='bx bx-plug' ></i>
                          <span class="link_name">Plugins</span>
                        </a>
                        <i class='bx bxs-chevron-down arrow' ></i>
                    </div>
                    <ul class="sub-menu" slot='childlist'>
                        <li><a class="link_name" href="#">Plugins</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Bootstrap</a></li>
                        <li><a href="#">BoxIcons</a></li>
                    </ul>
                </side-bar-list-item>
            </li>
            <li>
                <side-bar-list-item>
                    <a href="#" slot='linker'>
                        <i class='bx bx-compass' ></i>
                        <span class="link_name">Explore</span>
                    </a>
                    <ul class="sub-menu blank" slot='childlist'>
                        <li><a class="link_name" href="#">Explore</a></li>
                    </ul>
                </side-bar-list-item>
            </li>
            <li>
                <side-bar-list-item>
                    <a href="#" slot='linker'>
                        <i class='bx bx-history'></i>
                        <span class="link_name">History</span>
                    </a>
                    <ul class="sub-menu blank" slot='childlist'>
                        <li><a class="link_name" href="#">History</a></li>
                    </ul>
                </side-bar-list-item>
            </li>
            <li>
                <side-bar-list-item>
                    <a href="#" slot='linker'>
                        <i class='bx bx-cog' ></i>
                        <span class="link_name">Setting</span>
                    </a>
                    <ul class="sub-menu blank" slot='childlist'>
                        <li><a class="link_name" href="#">Setting</a></li>
                    </ul>
                </side-bar-list-item>
            </li>
            <li>
                <side-bar-user></side-bar-user>
            </li>
            
        </ul>
    </div>
</template>

<script>
import SideBarListItem from './sidebarlistitem/SideBarListItem'
import SideBarUser from './sidebaruser/SideBarUser'

    export default {
        name: 'SideBarList',
        components: {
            SideBarListItem,
            SideBarUser
        }
    }
</script>

<style scoped>
.nav-links{
  height: 700px;
  padding: 30px 0 150px 0;
  overflow: auto;
}
.close .nav-links{
  overflow: visible;
}
.nav-links::-webkit-scrollbar{
  display: none;
}
.nav-links li{
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}
.nav-links li:hover{
  background: #1d1b31;
}
.nav-links li .iocn-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.close .nav-links li .iocn-link{
  display: block
}
.nav-links li i{
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.nav-links .showMenu i.arrow{
  transform: rotate(-180deg);
}
.close .nav-links i.arrow{
  display: none;
}
.nav-links li a{
  display: flex;
  align-items: center;
  text-decoration: none;
}
.nav-links li a .link_name{
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  transition: all 0.4s ease;
}
.close .nav-links li a .link_name{
  opacity: 0;
  pointer-events: none;
}
.nav-links li .sub-menu{
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background: #1d1b31;
  display: none;
}
.nav-links .showMenu .sub-menu{
  display: block;
}
.nav-links li .sub-menu a{
  color: #fff;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.nav-links li .sub-menu a:hover{
  opacity: 1;
}
.close .nav-links li .sub-menu{
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}
.close .nav-links li:hover .sub-menu{
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}
.nav-links li .sub-menu .link_name{
  display: none;
}
.close .nav-links li .sub-menu .link_name{
  font-size: 18px;
  opacity: 1;
  display: block;
}
.nav-links li .sub-menu.blank{
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}
.nav-links li:hover .sub-menu.blank{
  top: 50%;
  transform: translateY(-50%);
}
</style>