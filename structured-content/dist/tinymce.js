!function(){"use strict";function e(e){return{text:e.getLang("wpsc.faqButtonText","Single FAQ"),tooltip:e.getLang("wpsc.faqTooltip","Adds a FAQ block to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.faqTitle","Featured Snippet FAQ"),minWidth:500,height:500,autoScroll:!1,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"listbox",name:"sc_headline",label:e.getLang("wpsc.titleTag","Title Tag"),values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{type:"textbox",name:"sc_question",label:e.getLang("wpsc.question","Question"),value:"",placeholder:e.getLang("wpsc.questionPlaceholder","Enter Your Question here..."),multiline:!0},{type:"textbox",name:"sc_answer",label:e.getLang("wpsc.answer","Answer"),value:"",placeholder:e.getLang("wpsc.answerPlaceholder","Enter your answer here..."),multiline:!0,minHeight:100},{type:"textbox",name:"sc_img",label:e.getLang("wpsc.image","Image"),value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:e.getLang("wpsc.addImage","Add Image"),classes:"select_image"},{type:"textbox",name:"sc_img_description",label:e.getLang("wpsc.imageDescription","Image Description"),value:"",multiline:!0},{type:"textbox",name:"sc_css_classes",label:e.getLang("wpsc.cssClass","CSS class"),placeholder:e.getLang("wpsc.cssClassPlaceholder","additional css classes ..."),value:""}],onsubmit:function(t){var a=t.data;return e.insertContent('[sc_fs_faq html="'.concat(a.giveHTML,'" headline="').concat(a.sc_headline,'" img="').concat(a.sc_img,'" question="').concat(a.sc_question,'" img_alt="').concat(a.sc_img_description,'" css_class="').concat(a.sc_css_classes,'"]\n                ').concat(a.sc_answer,"\n               [/sc_fs_faq]"))}})}}}function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t.querySelector(e)}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return Array.from(t.querySelectorAll(e))}function n(e,t,a){document.addEventListener(e,(function(e){var n=e.target.closest(t);n&&a(e,n)}))}function o(){var e=document.createElement("input");return e.setAttribute("type","datetime-local"),"datetime-local"===e.type}function l(){var e=document.createElement("input");return e.setAttribute("type","date"),"date"===e.type}function c(e){n("click","#addOne",(function(){var n,o,l,c,s=a("#fields fieldset").length,r=t("#fields #fieldset-".concat(s-1)),i='\n                    <fieldset id="fieldset-'.concat(s,'" data-key="').concat(s,'">\n                        <hr class="sc-hr">\n                        <div>\n                            <label>').concat(e.getLang("wpsc.titleTag","Title Tag"),'</label>\n                            <select name="headlineTag" id="headlineTag-').concat(s,'">\n                                <option value="h2">h2</option>\n                                <option value="h3">h3</option>\n                                <option value="h4">h4</option>\n                                <option value="h5">h5</option>\n                                <option value="h6">h6</option>\n                                <option value="p">p</option>\n                            </select>\n                        </div>\n                        <div>\n                            <label>').concat(e.getLang("wpsc.question","Question"),'</label>\n                            <input type="text" id="question-').concat(s,'" name="question" placeholder="').concat(e.getLang("wpsc.questionPlaceholder","Enter Your Question here..."),'">\n                        </div>\n                        <div>\n                            <label>').concat(e.getLang("wpsc.answer","Answer"),'</label>\n                            <textarea id="answer-').concat(s,'" rows="5" name="answer" placeholder="').concat(e.getLang("wpsc.answerPlaceholder","Enter your answer here..."),'"></textarea>\n                        </div>\n                        <div>\n                            <div type="text" id="imageID-').concat(s,'" name="imageID"></div>\n                            <div class="mce-btn">\n                                <button type="button"  class="mce-select_image" data-target="imageID-').concat(s,'">').concat(e.getLang("wpsc.addImage","Add Image"),'</button>\n                            </div>\n                        </div>\n                        <div class="mce-btn removeLast">\n                            <button type="button" class="sc-removeLastFaq" data-target="bild-').concat(s,'">- ').concat(e.getLang("wpsc.removeLastOne","Remove Last Oney"),"</button>\n                        </div>\n                    </fieldset>\n                ");l=i,(c=document.createElement("div")).innerHTML=l.trim(),n=c.firstChild,(o=r).parentNode.insertBefore(n,o.nextSibling)}))}function s(e){return{text:e.getLang("wpsc.multiFaqButtonText","Multi FAQ"),tooltip:e.getLang("wpsc.multiFaqTooltip","Adds multiple FAQ blocks to the page."),onclick:function(){document.body.style.overflow="hidden",e.windowManager.open({title:e.getLang("wpsc.faqTitle","Featured Snippet FAQ"),minWidth:500,autoScroll:!1,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"textbox",name:"sc_css_classes",label:e.getLang("wpsc.cssClass","CSS class"),placeholder:e.getLang("wpsc.cssClassPlaceholder","additional css classes ..."),value:""},{type:"container",name:"container",label:"",html:' \n                        <form id="sc-start-point">\n                        <div id="fields">\n                            <fieldset id="fieldset-0" data-key="0">\n                                <hr class="sc-hr">\n                                <div>\n                                    <label>'.concat(e.getLang("wpsc.titleTag","Title Tag"),'</label>\n                                    <select name="headlineTag" id="headlineTag-0">\n                                        <option value="h2">h2</option>\n                                        <option value="h3">h3</option>\n                                        <option value="h4">h4</option>\n                                        <option value="h5">h5</option>\n                                        <option value="h6">h6</option>\n                                        <option value="p">p</option>\n                                    </select>\n                                </div>\n                                <div>\n                                    <label>\n                                    ').concat(e.getLang("wpsc.question","Question"),'\n                                    </label>\n                                    <input type="text" id="question-0" name="question" placeholder="').concat(e.getLang("wpsc.questionPlaceholder","Enter Your Question here..."),'">\n                                </div>\n                                <div>\n                                    <label>').concat(e.getLang("wpsc.answer","Answer"),'</label>\n                                    <textarea id="answer-0" rows="5" name="answer" placeholder="').concat(e.getLang("wpsc.answerPlaceholder","Enter your answer here..."),'"></textarea>\n                                </div>\n                                <div>\n                                    <div type="text" id="imageID-0" name="imageID"></div>\n                                    <div class="mce-btn">\n                                        <button type="button" class="mce-select_image" data-target="imageID-0">\n                                            ').concat(e.getLang("wpsc.addImage","Add Image"),'\n                                        </button>\n                                    </div>\n                                </div> \n                            </fieldset>\n                        </div>\n                        <div class="mce-btn long" style="margin-bottom: 24px">\n                            <button id="addOne" type="button">\n                                ').concat(e.getLang("wpsc.addOne","Answer"),"\n                            </button>\n                        </div>\n                    </form>")}],onsubmit:function(n){var o=n.data;document.body.style.overflow="auto",e.insertContent(function(e){for(var n="[sc_fs_multi_faq ",o=a("#sc-start-point fieldset"),l=0;l<o.length;l++){var c=o[l].dataset.key,s=t("#headlineTag-".concat(c)).value,r=t("#question-".concat(c)).value,i=t("#answer-".concat(c)).value,d=t("#imageID-".concat(c)).innerHTML;n+="headline-".concat(c,'="').concat(s,'" question-').concat(c,'="').concat(r,'" answer-').concat(c,'="').concat(i,'" image-').concat(c,'="').concat(d,'" ')}return n+' count="'.concat(o.length,'" html="').concat(e.giveHTML,'" css_class="').concat(e.sc_css_classes,'"]')}(o))},onClose:function(){document.body.style.overflow="auto"}}),c(e),n("click",".sc-removeLastFaq",(function(){a("#sc-start-point fieldset")[a("#sc-start-point fieldset").length-1].remove()}))}}}function r(e){var a=l()?"":"(Format: 2019-08-22)",n=l()?500:800;return{text:e.getLang("wpsc.jobButtonText","Job"),tooltip:e.getLang("wpsc.jobTooltip","Adds a JobPosting block to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.jobPopupTitle","Featured Snippet Job"),minWidth:n,height:500,autoScroll:!1,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"listbox",name:"titleTag",label:e.getLang("wpsc.titleTag","Title Tag"),values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{type:"textbox",name:"jobTitle",label:e.getLang("wpsc.job","Job title"),value:"",placeholder:e.getLang("wpsc.jobPlaceholder","Please enter your job title here ..."),multiline:!0},{type:"textbox",name:"description",label:e.getLang("wpsc.description","Description"),value:"",placeholder:e.getLang("wpsc.jobDescriptionPlaceholder","Enter your job description here..."),multiline:!0,minHeight:100},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.company","Company"),"</h1>")},{type:"textbox",name:"companyName",label:e.getLang("wpsc.companyName","Company Name"),value:"",placeholder:e.getLang("wpsc.companyNamePlaceholder","Company Name"),multiline:!0},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.sameAsHeadline","Same as"),"</h1>")},{type:"textbox",name:"sameAs",label:e.getLang("wpsc.sameAsLabel","Website / Social Media"),value:"",placeholder:e.getLang("wpsc.sameAsPlaceholder","https://your-website.com"),multiline:!1},{type:"textbox",name:"sc_img",label:e.getLang("wpsc.image","Image"),value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:e.getLang("wpsc.addImage","Add Image"),classes:"select_image"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.jobLocation","Job Location"),"</h1>")},{type:"textbox",name:"streetAddress",label:e.getLang("wpsc.street","Street"),value:"",placeholder:e.getLang("wpsc.streetPlaceholder","Any Street 3A")},{type:"textbox",name:"postalCode",label:e.getLang("wpsc.zip","Postal Code"),value:"",placeholder:e.getLang("wpsc.zipPlaceholder","Any Postal Code")},{type:"textbox",name:"addressLocality",label:e.getLang("wpsc.locality","Locality"),value:"",placeholder:e.getLang("wpsc.localityPlaceholder","Any City")},{type:"textbox",name:"addressCountry",label:e.getLang("wpsc.countryCode","Country ISO Code"),value:"",placeholder:e.getLang("wpsc.countryCode","US")},{type:"textbox",name:"addressRegion",label:e.getLang("wpsc.regionCode","Region ISO Code"),value:"",placeholder:e.getLang("wpsc.regionCodePlaceholder","US-CA")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.salary","Salary"),"</h1>")},{type:"listbox",name:"baseSalary",label:e.getLang("wpsc.unit","Unit"),values:[{text:e.getLang("wpsc.hourly","Hourly"),value:"HOUR"},{text:e.getLang("wpsc.daily","Daily"),value:"DAY"},{text:e.getLang("wpsc.weekly","Weekly"),value:"WEEK"},{text:e.getLang("wpsc.monthly","Monthly"),value:"MONTH"},{text:e.getLang("wpsc.yearly","Yearly"),value:"YEAR"}]},{type:"textbox",name:"currencyCode",label:e.getLang("wpsc.currencyCode","Currency ISO Code"),value:"",placeholder:e.getLang("wosc.currencyCodePlaceholder","USD")},{type:"textbox",name:"quantitativeValue",label:e.getLang("wpsc.value","Value"),value:"",placeholder:"40.00"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.jobMeta","Job Meta"),"</h1>")},{type:"listbox",name:"employmentType",label:e.getLang("wpsc.employmentType","CSS class"),values:[{text:e.getLang("wpsc.fullTime","Full Time"),value:"FULL_TIME"},{text:e.getLang("wpsc.partTime","Part Time"),value:"PART_TIME"},{text:e.getLang("wpsc.contractor","Contractor"),value:"CONTRACTOR"},{text:e.getLang("wpsc.temporary","Temporary"),value:"TEMPORARY"},{text:e.getLang("wpsc.intern","Intern"),value:"INTERN"},{text:e.getLang("wpsc.volunteer","Volunteer"),value:"VOLUNTEER"},{text:e.getLang("wpsc.perDiem","Per Diem"),value:"PER_DIEM"},{text:e.getLang("wpsc.other","Other"),value:"OTHER"}]},{type:"textbox",name:"validThrough",label:"".concat(e.getLang("wpsc.validThrough","Valid Through")," ").concat(a),classes:"sc_valid_through"},{type:"textbox",name:"sc_cssClass",label:e.getLang("wpsc.cssClass","CSS class"),value:""}],onsubmit:function(t){var a=t.data;e.insertContent("[sc_fs_job\n                html='".concat(a.giveHTML,"'\n                title='").concat(a.jobTitle,"'\n                title_tag='").concat(a.titleTag,"'\n                valid_through='").concat(a.validThrough,"'\n                employment_type='").concat(a.employmentType,"'\n                company_name='").concat(a.companyName,"'\n                same_as='").concat(a.sameAs,"'\n                logo_id='").concat(a.sc_img,"'\n                street_address='").concat(a.streetAddress,"'\n                address_locality='").concat(a.addressLocality,"'\n                address_region='").concat(a.addressRegion,"'\n                postal_code='").concat(a.postalCode,"'\n                address_country='").concat(a.addressCountry,"'\n                currency_code='").concat(a.currencyCode,"'\n                quantitative_value='").concat(a.quantitativeValue,"'\n                base_salary='").concat(a.baseSalary,"'\n                css_class='").concat(a.sc_cssClass,"'\n                ]\n                ").concat(a.description,"\n                [/sc_fs_job]"))}}),l()&&(t(".mce-sc_valid_through").type="date")}}}function i(e){var a=o()?"":"(Format: 2019-08-22, 12:45)",n=o()?500:800;return{text:e.getLang("wpsc.eventButtonText","Event"),tooltip:e.getLang("wpsc.eventTooltip","Adds a Event block to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.eventPopupTitle","Featured Snippet Event"),minWidth:n,height:500,autoScroll:!1,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"listbox",name:"titleTag",label:e.getLang("wpsc.titleTag","Title Tag"),values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{type:"textbox",name:"title",label:e.getLang("wpsc.event","Event Title"),value:"",placeholder:e.getLang("wpsc.eventPlaceholder","Enter Your Event Title...")},{type:"textbox",name:"description",label:e.getLang("wpsc.description","Description"),value:"",placeholder:e.getLang("wpsc.eventDescriptionPlaceholder","Enter your event description here..."),multiline:!0,minHeight:100},{type:"textbox",name:"image_id",label:e.getLang("wpsc.image","Image"),value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:e.getLang("wpsc.addImage","Add Image"),classes:"select_image"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.eventMeta","Event Meta"),"</h1>")},{type:"textbox",name:"eventLocation",label:e.getLang("wpsc.name","Name"),value:"",placeholder:e.getLang("wpsc.eventLocationNamePlaceholder","Event Location Name")},{type:"listbox",name:"status",label:e.getLang("wpsc.event_status","Event Status"),values:[{text:e.getLang("wpsc.eventScheduled","Scheduled"),value:"EventScheduled"},{text:e.getLang("wpsc.eventCancelled","Cancelled"),value:"EventCancelled"},{text:e.getLang("wpsc.eventMovedOnline","Moved Online"),value:"EventMovedOnline"},{text:e.getLang("wpsc.eventPostponed","Postponed"),value:"EventPostponed"},{text:e.getLang("wpsc.eventRescheduled","Rescheduled"),value:"EventRescheduled"}]},{type:"textbox",name:"prev_start_date",label:"".concat(e.getLang("wpsc.prev_start_date","Previous Start Date")," ").concat(a),placeholder:e.getLang("wpsc.prev_start_datePlaceholder","optional"),classes:"sc_prev_start_date"},{type:"textbox",name:"startDate",label:"".concat(e.getLang("wpsc.startDate","Start Date")," ").concat(a),classes:"sc_start_date"},{type:"textbox",name:"endDate",label:"".concat(e.getLang("wpsc.endDate","End Date")," ").concat(a),classes:"sc_end_date"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.eventLocation","Event Location"),"</h1>")},{type:"listbox",name:"event_attendance_mode",label:e.getLang("wpsc.event_attendance_mode","Attendance Mode"),values:[{text:e.getLang("wpsc.offlineEventAttendanceMode","Offline"),value:"OfflineEventAttendanceMode"},{text:e.getLang("wpsc.onlineEventAttendanceMode","Online"),value:"OnlineEventAttendanceMode"},{text:e.getLang("wpsc.mixedEventAttendanceMode","Mixed"),value:"MixedEventAttendanceMode"}]},{type:"textbox",name:"online_url",label:e.getLang("wpsc.online_url","URL"),value:"",placeholder:e.getLang("wpsc.online_urlPlaceholder","Online URL of Event"),multiline:!1,classes:"sc_online_url"},{type:"textbox",name:"streetAddress",label:e.getLang("wpsc.street","Street"),value:"",placeholder:e.getLang("wpsc.streetPlaceholder","Any Street 3A")},{type:"textbox",name:"postalCode",label:e.getLang("wpsc.zip","Postal Code"),value:"",placeholder:e.getLang("wpsc.zipPlaceholder","Any Postal Code")},{type:"textbox",name:"addressLocality",label:e.getLang("wpsc.locality","Locality"),value:"",placeholder:e.getLang("wpsc.localityPlaceholder","Any City")},{type:"textbox",name:"addressCountry",label:e.getLang("wpsc.countryCode","Country ISO Code"),value:"",placeholder:e.getLang("wpsc.countryCodePlaceholder","US")},{type:"textbox",name:"addressRegion",label:e.getLang("wpsc.regionCode","Region ISO Code"),value:"",placeholder:e.getLang("wpsc.regionCodePlaceholder","US-CA")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.performer","Performer"),"</h1>")},{type:"listbox",name:"performer",label:e.getLang("wpsc.type","Type"),values:[{text:e.getLang("wpsc.performingGroup","Performing Group"),value:"PerformingGroup"},{text:e.getLang("wpsc.performingPerson","Person"),value:"Person"}]},{type:"textbox",name:"performerName",label:e.getLang("wpsc.performerName","Performer"),value:"",placeholder:e.getLang("wpsc.performerNamePlaceholder","John Doe")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.offer","Offer"),"</h1>")},{type:"listbox",name:"offerAvailability",label:e.getLang("wpsc.availability","Availability"),values:[{text:e.getLang("wpsc.inStock","In Stock"),value:"InStock"},{text:e.getLang("wpsc.soldOut","Sold Out"),value:"SoldOut"},{text:e.getLang("wpsc.preOrder","Pre Order"),value:"PreOrder"}]},{type:"textbox",name:"offerUrl",label:e.getLang("wpsc.ticketWebsite","Ticket Website"),value:"",placeholder:e.getLang("wpsc.ticketWebsitePlaceholder","https://your-website.com"),multiline:!1},{type:"textbox",name:"currencyCode",label:e.getLang("wpsc.currencyCode","Currency ISO Code"),value:"",placeholder:e.getLang("wpsc.currencyCodePlaceholder","USD")},{type:"textbox",name:"price",label:e.getLang("wpsc.price","Price"),value:"",placeholder:"40.00"},{type:"textbox",name:"offerValidFrom",label:"".concat(e.getLang("wpsc.validFrom","Valid From")," ").concat(a),classes:"sc_valid_from"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.additional","Additional"),"</h1>")},{type:"textbox",name:"cssClass",label:e.getLang("wpsc.cssClass","CSS class"),value:""}],onsubmit:function(t){var a=t.data;e.insertContent('[sc_fs_event \n                html="'.concat(a.giveHTML,'" \n                title="').concat(a.title,'" \n                title_tag="').concat(a.titleTag,'"\n                event_location="').concat(a.eventLocation,'"\n                status="').concat(a.status,'"\n                ').concat(a.online_url?'online_url="'.concat(a.online_url,'"'):"","\n                ").concat(a.prev_start_date?'prev_start_date="'.concat(a.prev_start_date,'"'):"",'\n                event_attendance_mode="').concat(a.event_attendance_mode,'"\n                start_date="').concat(a.startDate,'"\n                end_date="').concat(a.endDate,'"\n                street_address="').concat(a.streetAddress,'"\n                address_locality="').concat(a.addressLocality,'"\n                address_region="').concat(a.addressRegion,'"\n                postal_code="').concat(a.postalCode,'"\n                address_country="').concat(a.addressCountry,'"\n                image_id="').concat(a.image_id,'"\n                performer="').concat(a.performer,'"\n                performer_name="').concat(a.performerName,'"\n                offer_availability="').concat(a.offerAvailability,'"\n                offer_url="').concat(a.offerUrl,'"\n                currency_code="').concat(a.currencyCode,'"\n                price="').concat(a.price,'"\n                offer_valid_from="').concat(a.offerValidFrom,'"\n                css_class="').concat(a.cssClass,'"\n            ]\n                ').concat(a.description,"\n            [/sc_fs_event]"))}}),o()&&(t(".mce-sc_prev_start_date").type="datetime-local",t(".mce-sc_start_date").type="datetime-local",t(".mce-sc_end_date").type="datetime-local",t(".mce-sc_valid_from").type="datetime-local")}}}function d(e){var a=l()?"":"(Format: 2019-08-22)",n=l()?500:800;return{text:e.getLang("wpsc.personButtonText","Person"),tooltip:e.getLang("wpsc.personTooltip","Adds a Person block to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.personPopupTitle","Featured Snippet Person"),minWidth:n,height:500,autoScroll:!1,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.personal","Personal"),"</h1>")},{type:"textbox",name:"personName",label:e.getLang("wpsc.name","Name"),value:"",placeholder:e.getLang("wpsc.namePlaceholder","Please enter your Name here ...")},{type:"textbox",name:"personName",label:e.getLang("wpsc.alt_name","Alternate Name"),value:"",placeholder:e.getLang("wpsc.altNamePlaceholder","Alternate Name here ...")},{type:"textbox",name:"jobTitle",label:e.getLang("wpsc.jobTitle","Job Title"),value:"",placeholder:e.getLang("wpsc.jobTitlePlaceholder","Please enter your job title here ...")},{type:"textbox",name:"sc_img",label:e.getLang("wpsc.image","Image"),value:"",classes:"image"},{type:"button",name:"select_image",label:" ",text:e.getLang("wpsc.addImage","Add Image"),classes:"select_image"},{type:"textbox",name:"birthdate",label:"".concat(e.getLang("wpsc.birthdate","Birthdate")," ").concat(a),classes:"sc_birthdate"},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.contact","Contact"),"</h1>")},{type:"textbox",name:"email",label:e.getLang("wpsc.email","E-Mail"),value:"",placeholder:e.getLang("wpsc.contactEmail","jane-doe@xyz.edu"),multiline:!1},{type:"textbox",name:"homepage",label:e.getLang("wpsc.contactHomepage","URL"),value:"",placeholder:e.getLang("wpsc.contactHomepagePlaceholder","http://www.janedoe.com"),multiline:!1},{type:"textbox",name:"telephone",label:e.getLang("wpsc.contactPhone","Telephone"),value:"",placeholder:e.getLang("wpsc.contactPhonePlaceholder","(425) 123-4567"),multiline:!1},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.address","Address"),"</h1>")},{type:"textbox",name:"streetAddress",label:e.getLang("wpsc.street","Street"),value:"",placeholder:e.getLang("wpsc.streetPlaceholder","Any Street 3A")},{type:"textbox",name:"postalCode",label:e.getLang("wpsc.zip","Postal Code"),value:"",placeholder:e.getLang("wpsc.zipPlaceholder","Any Postal Code")},{type:"textbox",name:"addressLocality",label:e.getLang("wpsc.locality","Locality"),value:"",placeholder:e.getLang("wpsc.localityPlaceholder","Any City")},{type:"textbox",name:"addressCountry",label:e.getLang("wpsc.countryCode","Country ISO Code"),value:"",placeholder:e.getLang("wpsc.countryCodePlaceholder","US")},{type:"textbox",name:"addressRegion",label:e.getLang("wpsc.regionCode","Region ISO Code"),value:"",placeholder:e.getLang("wpsc.regionCodePlaceholder","US-CA")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.colleagues","Colleagues"),"</h1>")},{type:"textbox",name:"colleague",label:e.getLang("wpsc.colleagueLabel","Colleague"),value:"",placeholder:e.getLang("wpsc.colleaguePlaceholder","Comma seperated URLs")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.work","Work"),"</h1>")},{type:"textbox",name:"works_for_name",label:e.getLang("wpsc.works_for_name","Organisation Name"),value:"",placeholder:e.getLang("wpsc.works_for_namePlaceholder","Your Works Name")},{type:"textbox",name:"works_for_alt",label:e.getLang("wpsc.works_for_alt","Alternate Name"),value:"",placeholder:e.getLang("wpsc.works_for_altPlaceholder","Your Works Alternate Name")},{type:"textbox",name:"works_for_url",label:e.getLang("wpsc.works_for_url","Url"),value:"",placeholder:e.getLang("wpsc.works_for_urlPlaceholder","Organisation Website")},{type:"textbox",name:"works_for_logo",label:e.getLang("wpsc.works_for_logo","Logo"),value:"",placeholder:e.getLang("wpsc.works_for_logoPlaceholder","Organisation Logo")},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.sameAsHeadline","Same as"),"</h1>")},{type:"textbox",name:"same_as",label:e.getLang("wpsc.sameAsLabel","Website / Social Media"),value:"",placeholder:e.getLang("wpsc.sameAsPlaceholder","https://xyz.com/me.html")},{type:"textbox",name:"sc_cssClass",label:e.getLang("wpsc.cssClass","CSS class"),value:"",default:""}],onsubmit:function(t){var a=t.data;e.insertContent('[sc_fs_person \n                html="'.concat(a.giveHTML,'"\n                person_name="').concat(a.personName,'" \n                job_title="').concat(a.jobTitle,'" \n                image_id="').concat(a.sc_img,'"\n                birthdate="').concat(a.birthdate,'"\n                street_address="').concat(a.streetAddress,'"\n                address_locality="').concat(a.addressLocality,'"\n                address_region="').concat(a.addressRegion,'"\n                postal_code="').concat(a.postalCode,'"\n                address_country="').concat(a.addressCountry,'"\n                email="').concat(a.email,'"\n                url="').concat(a.homepage,'"\n                telephone="').concat(a.telephone,'"\n                css_class="').concat(a.sc_cssClass,'"\n                colleague="').concat(a.colleague,'"\n                works_for_name="').concat(a.works_for_name,'"\n                works_for_alt="').concat(a.works_for_alt,'"\n                works_for_url="').concat(a.works_for_url,'"\n                works_for_logo="').concat(a.works_for_logo,'"\n                same_as="').concat(a.same_as,'"\n              ]'))}}),l()&&(t(".mce-sc_birthdate").type="date")}}}function p(e){return{text:e.getLang("wpsc.courseButtonText","Course"),tooltip:e.getLang("wpsc.courseTooltip","Adds a Course block to the page."),onclick:function(){e.windowManager.open({title:e.getLang("wpsc.coursePopupTitle","Featured Snippet Course"),minWidth:500,height:500,autoScroll:!1,classes:"sc-panel",body:[{type:"checkbox",name:"giveHTML",label:e.getLang("wpsc.renderHTML","Render HTML"),checked:!0},{type:"listbox",name:"titleTag",label:e.getLang("wpsc.titleTag","Title Tag"),values:[{text:"h2",value:"h2"},{text:"h3",value:"h3"},{text:"h4",value:"h4"},{text:"h5",value:"h5"},{text:"h6",value:"h6"},{text:"p",value:"p"}],value:"h2"},{type:"textbox",name:"title",label:e.getLang("wpsc.course","Course Name"),value:"",placeholder:e.getLang("wpsc.coursePlaceholder","Enter Your Course Name here...")},{type:"textbox",name:"description",label:e.getLang("wpsc.description","Description"),value:"",placeholder:e.getLang("wpsc.description","Enter your description here..."),multiline:!0,minHeight:100},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.providerInformation","Provider Information"),"</h1>")},{type:"textbox",name:"providerName",label:e.getLang("wpsc.providerName","Provider Name"),value:"",placeholder:e.getLang("wpsc.providerName","Provider Name"),multiline:!1},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.sameAsHeadline","Same as"),"</h1>")},{type:"textbox",name:"providerSameAs",label:e.getLang("wpsc.sameAsLabel","Website / Social Media"),value:"",placeholder:e.getLang("wpsc.sameAsPlaceholder","https://your-website.com"),multiline:!1},{type:"container",name:"container",label:"",html:'<h1 style="font-weight: bold;">'.concat(e.getLang("wpsc.additional","Additional"),"</h1>")},{type:"textbox",name:"cssClass",label:e.getLang("wpsc.cssClass","CSS class"),value:""}],onsubmit:function(t){var a=t.data;e.insertContent('[sc_fs_course \n                            html="'.concat(a.giveHTML,'" \n                            title="').concat(a.title,'" \n                            title_tag="').concat(a.titleTag,'"\n                            provider_name="').concat(a.providerName,'"\n                            provider_same_as="').concat(a.providerSameAs,'"\n                            css_class="').concat(a.cssClass,'"\n                ]\n                ').concat(a.description,"\n                [/sc_fs_course]"))}})}}}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===a&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.mce-window.mce-container.mce-sc-panel .mce-container-body.mce-abs-layout{overflow-x:hidden;overflow-y:auto}form#sc-start-point fieldset{padding-top:15px}form#sc-start-point fieldset input:not([type=checkbox]),form#sc-start-point fieldset select{border:1px solid #ddd;box-sizing:border-box;display:block;height:30px;margin-bottom:15px;width:69%}form#sc-start-point fieldset label{display:block;float:left;margin-bottom:5px;margin-top:5px;width:31%}form#sc-start-point fieldset div{clear:both;overflow:hidden}form#sc-start-point fieldset div[name=imageID]{float:left;width:31%}form#sc-start-point fieldset div[name=imageID]:before{content:"Bild ID: ";pointer-events:none}form#sc-start-point fieldset .mce-btn.long{width:100%}#fields+.mce-btn.long{margin-top:15px;width:100%}form#sc-start-point fieldset .mce-btn.removeLast{display:none}form#sc-start-point fieldset:last-of-type .mce-btn.removeLast{display:table;margin-top:24px;text-align:center;width:100%}form#sc-start-point textarea{background-color:#fff;border:1px solid #ddd;box-shadow:inset 0 1px 2px rgba(0,0,0,.07);box-sizing:border-box;color:#32373c;display:block;margin-bottom:15px;white-space:normal;width:69%}form#sc-start-point #addOne{width:100%}form#sc-start-point .sc-hr{border:.5px solid #ddd;margin:10px 0}'),"undefined"!=typeof tinymce&&tinymce.PluginManager.add("structured_content_dropdown",(function(a){return n("click",".mce-select_image",(function(e){e.preventDefault();var a=e.target.dataset.target,n=t(void 0===a?".mce-image":"#".concat(a)),o=void 0===a,l=wp.media.frames.file_frame=wp.media({title:"Add Image",button:{text:"Add Image"},multiple:!1});l.on("select",(function(){var e=l.state().get("selection").first().toJSON();o?n.value=e.id:n.innerHTML=e.id})),l.open()})),a.addButton("structured_content_dropdown",{icon:"structured-content",type:"menubutton",menu:[e(a),s(a),r(a),i(a),d(a),p(a)]})}))}();
