// ==UserScript==
// @name         ReD Whitepages Identity Check Web
// @namespace    http://pro.whitepages.com
// @version      1.0
// @description  Implement deep links to Whitepages Identity Check Web within Retail Decisions order review screens
// @author       Spencer McLain <smclain@whitepages.com>
// @match        http*://csi.redworldwide.com/*
// @grant        none
// ==/UserScript==


function buildWPPLink(){

     var wppLink = document.getElementById("wpplink");
     if(!wppLink){
         var contentDiv = document.getElementById("customerPanel-body");
         if(contentDiv){
             var billFName = document.getElementById("td_customer_billing_firstName-bodyEl");
             var billLName = document.getElementById("td_customer_billing_lastName-bodyEl");
             var billStreet = document.getElementById("td_customer_billing_line1-bodyEl");
             var billStreet2 = document.getElementById("td_customer_billing_address2-bodyEl");
             var billStreetApt = document.getElementById("td_customer_billing_apt-bodyEl");
             var billCity = document.getElementById("td_customer_billing_city-bodyEl");
             var billState = document.getElementById("td_customer_billing_state-bodyEl");
             var billZip = document.getElementById("td_customer_billing_zipcode-bodyEl");
             var billPhone = document.getElementById("td_customer_billing_homephone-bodyEl");
             var shipFName = document.getElementById("td_customer_shipping_firstName-bodyEl");
             var shipLName = document.getElementById("td_customer_shipping_lastName-bodyEl");
             var shipStreet = document.getElementById("td_customer_shipping_line1-bodyEl");
             var shipStreet2 = document.getElementById("td_customer_shipping_address2-bodyEl");
             var shipStreetApt = document.getElementById("td_customer_shipping_apt-bodyEl");
             var shipCity = document.getElementById("td_customer_shipping_city-bodyEl");
             var shipState = document.getElementById("td_customer_shipping_state-bodyEl");
             var shipZip = document.getElementById("td_customer_shipping_zipcode-bodyEl");
             var shipEmail = document.getElementById("td_customer_shipping_email-bodyEl");
             var shipPhone = document.getElementById("td_customer_shipping_phone-bodyEl");

          var ipDiv = document.getElementById("appendedDetailsIpDetailsPanel-body");
          if(ipDiv){
              var ipAddress = document.getElementById("appended_ip_ip-bodyEl");
             
             var wppURL = "https://pro.lookup.whitepages.com/identity_checks?";
             if(billFName.innerText!= "N/A")
                 wppURL += "billing_name="+encodeURIComponent(billFName.innerText)+"+"+encodeURIComponent(billLName.innerText)+"&";
             if(billStreet.innerText!= "N/A")
                 wppURL += "billing_address_street_line_1="+encodeURIComponent(billStreet.innerText)+"&";
             if(billStreet2.innerText!= "N/A")
                 wppURL += "billing_address_street_line_2="+encodeURIComponent(billStreet2.innerText)+"&";
             if(billStreetApt.innerText!= "N/A")
                 wppURL += "billing_address_street_line_2="+encodeURIComponent(billStreetApt.innerText)+"&";
             if(billCity.innerText!= "N/A")
                 wppURL += "billing_address_city="+encodeURIComponent(billCity.innerText)+"&";
             if(billState.innerText!= "N/A")
                 wppURL += "billing_address_state_code="+encodeURIComponent(billState.innerText)+"&";
             if(billZip.innerText!= "N/A")
                 wppURL += "billing_address_postal_code="+encodeURIComponent(billZip.innerText)+"&";
             if(billPhone.innerText!= "N/A")
                 wppURL += "billing_phone="+encodeURIComponent(billPhone.innerText)+"&";
             if(shipFName.innerText!= "N/A")
                 wppURL += "shipping_name="+encodeURIComponent(shipFName.innerText)+"+"+encodeURIComponent(shipLName.innerText)+"&";
             if(shipStreet.innerText!= "N/A")
                 wppURL += "shipping_address_street_line_1="+encodeURIComponent(shipStreet.innerText)+"&";
             if(shipStreet2.innerText!= "N/A")
                 wppURL += "shipping_address_street_line_2="+encodeURIComponent(shipStreet2.innerText)+"&";
             if(shipStreetApt.innerText!= "N/A")
                 wppURL += "shipping_address_street_line_2="+encodeURIComponent(shipStreetApt.innerText)+"&";
             if(shipCity.innerText!= "N/A")
                 wppURL += "shipping_address_city="+encodeURIComponent(shipCity.innerText)+"&";
             if(shipState.innerText!= "N/A")
                 wppURL += "shipping_address_state_code="+encodeURIComponent(shipState.innerText)+"&";
             if(shipZip.innerText!= "N/A")
                 wppURL += "shipping_address_postal_code="+encodeURIComponent(shipZip.innerText)+"&";
             if(shipPhone.innerText!= "N/A")
                 wppURL += "shipping_phone="+encodeURIComponent(shipPhone.innerText)+"&";
             if(shipEmail.innerText!= "N/A")
                 wppURL += "email_address="+encodeURIComponent(shipEmail.innerText)+"&";
             if(ipAddress.innerText!= "N/A")
                 wppURL += "ip_address="+encodeURIComponent(ipAddress.innerText)+"&";
             //cut the trailing '&'
             wppURL = wppURL.substring(0,wppURL.length-1);
             //alert(wppURL);
             
             var customerPanel = document.getElementById("customerPanel");
             var headerDiv = customerPanel.childNodes[0];
             if(headerDiv){
                 var a = document.createElement("a");
                 var linkText = document.createTextNode("Verify with Identity Check Web");
                 a.href = wppURL;
                 a.id = "wpplink";
                 a.target = "_blank";
                 a.appendChild(linkText);
                 headerDiv.appendChild(a);
             }
         }
     }
 }
}

buildWPPLink();
document.addEventListener("click",function(){buildWPPLink();});