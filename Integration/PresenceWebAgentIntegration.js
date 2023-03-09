function PresenceWebAgentIntegration(EventCallback) {
	var OperationList = new Array();
	var originServer;
	var iframeServer; 
	var EventFunction = EventCallback;
	
	function test1()
	{
		alert('test')
	}
	
	if (window.addEventListener) {
            // For standards-compliant web browsers
        window.addEventListener("message", displayMessage, false);
        }
        else {
            window.attachEvent("onmessage", displayMessage);
        }
	
	var ResponseCallback;
	var WaitingResponse = false;
	function sendMessage(message, Callback)
	{
		if (WaitingResponse) 
		{
			OperationList.push({Message:message, Callback: Callback});
		}
		else
		{
			ProcessOperation({Message:message, Callback: Callback});
		}
	}	

function ProcessOperation(messageObj)
{
	WaitingResponse = true;
	ResponseCallback = messageObj.Callback;
	iframeServer.postMessage(messageObj.Message, originServer);
}		
		
		 function displayMessage(evt) {

			var iframe = evt.source;
			originServer = evt.origin;
            iframeServer = iframe;
            //iframe.postMessage(message,evt.origin);			
						
            //document.getElementById("received-message").innerHTML = message;
			if (evt.data.Event!= null)
			{
			//if (evt.data.Event == 'EndContactEvent')
			//{			
			//	EndContactFunction(evt)
			//    AllowEndContact(bAllowEndContact);
			//}
			//else
			//{			
				EventFunction(evt.data);
			//}
			}
			else
			{	
				WaitingResponse = false;
				try
				{
				if (ResponseCallback!=null)
					ResponseCallback(evt.data);
				}
				finally
				{
				if (OperationList.length>0)
					ProcessOperation(OperationList.shift());				
				}
			}
			
        }
		
		this.SetAllowEndContact = function(value)
		{
		     var Operation = {"Request":"SetAllowEndContact", "Parameters": [{"Key":"SetAllowEndContact", "Value":value}]};
			 sendMessage(Operation, null);
		}


this.MakeCall = function(Phone, PhoneType, AppData, OperationCallback)
{
    var operationHTML5 = {"Request":"MakeCall","Parameters":[{"Key":"Phone", "Value":Phone},{"Key":"PhoneType", "Value":PhoneType},{"Key":"AppData", "Value":AppData}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.MakeCallFrom = function(StationFrom, Phone, PhoneType, AppData, OperationCallback)
{
    var operationHTML5 = {"Request":"MakeCallFrom","Parameters":[{"Key":"StationFrom", "Value":StationFrom},{"Key":"Phone", "Value":Phone},{"Key":"PhoneType", "Value":PhoneType},{"Key":"AppData", "Value":AppData}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.MakeConsultationCall = function(Phone, AppData, OperationCallback)
{
    var operationHTML5 = {"Request":"MakeConsultationCall","Parameters":[{"Key":"Phone", "Value":Phone},{"Key":"AppData", "Value":AppData}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.ClearActiveCall = function(OperationCallback)
{
    var operationHTML5 = {"Request":"ClearActiveCall"};
    sendMessage(operationHTML5, OperationCallback);
}

this.ClearCalls = function(OperationCallback)
{
    var operationHTML5 = {"Request":"ClearCalls"};
    sendMessage(operationHTML5, OperationCallback);
}

this.AnswerCall = function(OperationCallback)
{
    var operationHTML5 = {"Request":"AnswerCall"};
    sendMessage(operationHTML5, OperationCallback);
}

this.HoldCall = function(OperationCallback)
{
    var operationHTML5 = {"Request":"HoldCall"};
    sendMessage(operationHTML5, OperationCallback);
}

this.RetrieveCall = function(OperationCallback)
{
    var operationHTML5 = {"Request":"RetrieveCall"};
    sendMessage(operationHTML5, OperationCallback);
}

this.ToggleHoldRetrieveCall = function(OperationCallback)
{
    var operationHTML5 = {"Request":"ToggleHoldRetrieveCall"};
    sendMessage(operationHTML5, OperationCallback);
} 

this.TransferCall = function(OperationCallback)
{
    var operationHTML5 = {"Request":"TransferCall"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SingleStepTransferCall = function(Phone, OperationCallback)
{
    var operationHTML5 = {"Request":"SingleStepTransferCall","Parameters":[{"Key":"Phone", "Value":Phone}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.ConferenceCall = function(OperationCallback)
{
    var operationHTML5 = {"Request":"ConferenceCall"};
    sendMessage(operationHTML5, OperationCallback);
}

this.DropCall = function(OperationCallback)
{
    var operationHTML5 = {"Request":"DropCall"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SendDTMFTones = function(Tones, OperationCallback)
{
    var operationHTML5 = {"Request":"SendDTMFTones","Parameters":[{"Key":"Tones", "Value":Tones}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetLines = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetLines"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetLineCount = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetLineCount"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetLineActive = function(Index, OperationCallback)
{
    var operationHTML5 = {"Request":"SetLineActive","Parameters":[{"Key":"Index", "Value":Index}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.StartSession = function(OperationCallback)
{
    var operationHTML5 = {"Request":"StartSession"};
    sendMessage(operationHTML5, OperationCallback);
}

this.StopSession = function(ReasonCode, OperationCallback)
{
    var operationHTML5 = {"Request":"StopSession","Parameters":[{"Key":"ReasonCode", "Value":ReasonCode}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCallData = function(Key, OperationCallback)
{
    var operationHTML5 = {"Request":"GetCallData","Parameters":[{"Key":"Key", "Value":Key}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.AddCallData = function(Key, Value, OperationCallback)
{
    var operationHTML5 = {"Request":"AddCallData","Parameters":[{"Key":"Key", "Value":Key},{"Key":"Value", "Value":Value}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.DeleteCallData = function(Key, OperationCallback)
{
    var operationHTML5 = {"Request":"DeleteCallData","Parameters":[{"Key":"Key", "Value":Key}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GenerateNewPredictiveCall = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GenerateNewPredictiveCall"};
    sendMessage(operationHTML5, OperationCallback);
}

this.IsValidQCode = function(QCode, OperationCallback)
{
    var operationHTML5 = {"Request":"IsValidQCode","Parameters":[{"Key":"QCode", "Value":QCode}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.CloseContact = function(OperationCallback)
{
    var operationHTML5 = {"Request":"CloseContact"};
    sendMessage(operationHTML5, OperationCallback);
}

this.StartRecording = function(AppData, OperationCallback)
{
    var operationHTML5 = {"Request":"StartRecording","Parameters":[{"Key":"AppData", "Value":AppData}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.PauseRecording = function(OperationCallback)
{
    var operationHTML5 = {"Request":"PauseRecording"};
    sendMessage(operationHTML5, OperationCallback);
}

this.StopRecording = function(OperationCallback)
{
    var operationHTML5 = {"Request":"StopRecording"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetServiceAgents = function(ServiceId, OperationCallback)
{
    var operationHTML5 = {"Request":"GetServiceAgents","Parameters":[{"Key":"ServiceId", "Value":ServiceId}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetAgentId = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetAgentId"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetAgentStation = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetAgentStation"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetAgentName = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetAgentName"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetPhone = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetPhone"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetPhone = function(Phone, OperationCallback)
{
    var operationHTML5 = {"Request":"SetPhone","Parameters":[{"Key":"Phone", "Value":Phone}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetContactType = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetContactType"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetSourceId = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetSourceId"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetSourceId = function(SourceId, OperationCallback)
{
    var operationHTML5 = {"Request":"SetSourceId","Parameters":[{"Key":"SourceId", "Value":SourceId}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetContactId = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetContactId"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetAppData = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetAppData"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetAppData = function(AppData, OperationCallback)
{
    var operationHTML5 = {"Request":"SetAppData","Parameters":[{"Key":"AppData", "Value":AppData}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCollectDigits = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCollectDigits"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCollectVDN = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCollectVDN"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetDNIS = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetDNIS"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetUCID = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetUCID"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetSkill = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetSkill"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetVDN = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetVDN"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetSkillDescription = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetSkillDescription"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetVDNDescription = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetVDNDescription"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetServiceId = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetServiceId"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetServiceName = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetServiceName"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetOutboundType = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetOutboundType"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetPredictionType = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetPredictionType"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetPredictionLevel = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetPredictionLevel"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetQCode = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetQCode"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetQCode = function(QCode, OperationCallback)
{
    var operationHTML5 = {"Request":"SetQCode","Parameters":[{"Key":"QCode", "Value":QCode}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetScheduledDate = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetScheduledDate"};
    sendMessage(operationHTML5, OperationCallback);
}
function GetDateText(ScheduledDate)
{	var yyyy = ScheduledDate.getFullYear().toString();
	var mm = (ScheduledDate.getMonth()+1).toString(); // getMonth() is zero-based
	var dd  = ScheduledDate.getDate().toString();
	var hh  = ScheduledDate.getHours().toString();
	var minutes  = ScheduledDate.getMinutes().toString();
	var ScheduledDatetext = yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]) + " " + (hh[1]?hh:"0"+hh[0]) + ":" + (minutes[1]?minutes:"0"+minutes[0]); // padding
	return ScheduledDatetext;
}

this.SetScheduledDate = function(ScheduledDate, OperationCallback)
{
    var operationHTML5 = {"Request":"SetScheduledDate","Parameters":[{"Key":"ScheduledDate", "Value":GetDateText(ScheduledDate)}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetContactName = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetContactName"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetContactName = function(Name, OperationCallback)
{
    var operationHTML5 = {"Request":"SetContactName","Parameters":[{"Key":"Name", "Value":Name}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetComments = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetComments"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetComments = function(Comments, OperationCallback)
{
    var operationHTML5 = {"Request":"SetComments","Parameters":[{"Key":"Comments", "Value":Comments}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCaptured = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCaptured"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetCaptured = function(Captured, OperationCallback)
{
    var operationHTML5 = {"Request":"SetCaptured","Parameters":[{"Key":"Captured", "Value":Captured}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCapturedDate = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCapturedDate"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetCapturedDate = function(CapturedDate, OperationCallback)
{
    var operationHTML5 = {"Request":"SetCapturedDate","Parameters":[{"Key":"CapturedDate", "Value":GetDateText(CapturedDate)}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCheckQueuedCallsInterval = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCheckQueuedCallsInterval"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetCheckQueuedCallsInterval = function(Interval, OperationCallback)
{
    var operationHTML5 = {"Request":"SetCheckQueuedCallsInterval","Parameters":[{"Key":"Interval", "Value":Interval}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCustomData1 = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCustomData1"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetCustomData1 = function(CustomData1, OperationCallback)
{
    var operationHTML5 = {"Request":"SetCustomData1","Parameters":[{"Key":"CustomData1", "Value":CustomData1}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCustomData2 = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCustomData2"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetCustomData2 = function(CustomData2, OperationCallback)
{
    var operationHTML5 = {"Request":"SetCustomData2","Parameters":[{"Key":"CustomData2", "Value":CustomData2}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCustomData3 = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCustomData3"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetCustomData3 = function(CustomData3, OperationCallback)
{
    var operationHTML5 = {"Request":"SetCustomData3","Parameters":[{"Key":"CustomData3", "Value":CustomData3}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCallerId = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCallerId"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetCallerId = function(CallerId, OperationCallback)
{
    var operationHTML5 = {"Request":"SetCallerId","Parameters":[{"Key":"CallerId", "Value":CallerId}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCallerName = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCallerName"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetCallerName = function(CallerName, OperationCallback)
{
    var operationHTML5 = {"Request":"SetCallerName","Parameters":[{"Key":"CallerName", "Value":CallerName}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCallId = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCallId"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetCapturedLogin = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCapturedLogin"};
    sendMessage(operationHTML5, OperationCallback);
}
this.GetCapturedLoginName = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCapturedLoginName"};
    sendMessage(operationHTML5, OperationCallback);
}
this.GetCapturingAgent = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetCapturingAgent"};
    sendMessage(operationHTML5, OperationCallback);
}
this.GetContactType = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetContactType"};
    sendMessage(operationHTML5, OperationCallback);
}
this.GetLastDataSourceCustomerId = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetLastDataSourceCustomerId"};
    sendMessage(operationHTML5, OperationCallback);
}
this.GetLastAgent = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetLastAgent"};
    sendMessage(operationHTML5, OperationCallback);
}
this.GetLastHandlingDate = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetLastHandlingDate"};
    sendMessage(operationHTML5, OperationCallback);
}
this.GetLastQCode = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetLastQCode"};
    sendMessage(operationHTML5, OperationCallback);
}
this.GetLastQCodeDescription = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetLastQCodeDescription"};
    sendMessage(operationHTML5, OperationCallback);
}
this.GetLastDataSourceId = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetLastDataSourceId"};
    sendMessage(operationHTML5, OperationCallback);
}
this.GetLastDataSourceCustomerId = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetLastDataSourceCustomerId"};
    sendMessage(operationHTML5, OperationCallback);
}

this.InsertOutboundRecord = function(ServiceId, LoadId, SourceId, Name, Timezone, Status, Phone, PhoneTimeZone, AlternativePhones, AlternativePhoneDescriptions, AlternativePhoneTimeZones, ScheduledDate, CapturedAgent, Priority, Comments, CustomData1, CustomData2, CustomData3, CallerId, CallerName, AutomaticTimeZoneDetection, OperationCallback)
{
    var operationHTML5 = {"Request":"InsertOutboundRecord","Parameters":[{"Key":"ServiceId", "Value":ServiceId},{"Key":"LoadId", "Value":LoadId},{"Key":"SourceId", "Value":SourceId},{"Key":"Name", "Value":Name},{"Key":"Timezone", "Value":Timezone},{"Key":"Status", "Value":Status},{"Key":"Phone", "Value":Phone},{"Key":"PhoneTimeZone", "Value":PhoneTimeZone},{"Key":"AlternativePhones", "Value":AlternativePhones},{"Key":"AlternativePhoneDescriptions", "Value":AlternativePhoneDescriptions},{"Key":"AlternativePhoneTimeZones", "Value":AlternativePhoneTimeZones},{"Key":"ScheduledDate", "Value":GetDateText(ScheduledDate)},{"Key":"CapturedAgent", "Value":CapturedAgent},{"Key":"Priority", "Value":Priority},{"Key":"Comments", "Value":Comments},{"Key":"CustomData1", "Value":CustomData1},{"Key":"CustomData2", "Value":CustomData2},{"Key":"CustomData3", "Value":CustomData3},{"Key":"CallerId", "Value":CallerId},{"Key":"CallerName", "Value":CallerName}, {"Key":"AutomaticTimeZoneDetection", "Value":AutomaticTimeZoneDetection}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.UnloadOutboundRecord = function(ServiceId, LoadId, SourceId, OperationCallback)
{
    var operationHTML5 = {"Request":"UnloadOutboundRecord","Parameters":[{"Key":"ServiceId", "Value":ServiceId},{"Key":"LoadId", "Value":LoadId},{"Key":"SourceId", "Value":SourceId}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.RequestOutboundACDCall = function(ServiceId, Phone, SourceId, Name, ScheduledDate, Comments, OperationCallback)
{
    var operationHTML5 = {"Request":"RequestOutboundACDCall2","Parameters":[{"Key":"ServiceId", "Value":ServiceId},{"Key":"SourceId", "Value":SourceId},{"Key":"Phone", "Value":Phone},{"Key":"Name", "Value":Name},{"Key":"ScheduledDate", "Value":ScheduledDate},{"Key":"Comments", "Value":Comments}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetInternetVariable = function(Name, OperationCallback)
{
    var operationHTML5 = {"Request":"GetInternetVariable","Parameters":[{"Key":"Name", "Value":Name}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.SendMail = function(From, MailTo, CC, BCC, Subject, Body, OperationCallback)
{
    var operationHTML5 = {"Request":"SendMail","Parameters":[{"Key":"From", "Value":From},{"Key":"MailTo", "Value":MailTo},{"Key":"CC", "Value":CC},{"Key":"BCC", "Value":BCC},{"Key":"Subject", "Value":Subject},{"Key":"Body", "Value":Body}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetIncomingMail = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetIncomingMail"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetIncomingMailId = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetIncomingMailId"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetIncomingMailFrom = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetIncomingMailFrom"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetIncomingMailTo = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetIncomingMailTo"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetIncomingMailCC = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetIncomingMailCC"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetIncomingMailBCC = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetIncomingMailBCC"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetIncomingMailSubject = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetIncomingMailSubject"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetIncomingMailBody = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetIncomingMailBody"};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetIncomingMailAttachments = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetIncomingMailAttachments"};
    sendMessage(operationHTML5, OperationCallback);
}

this.OpenIncomingMailAttachment = function(Index, OperationCallback)
{
    var operationHTML5 = {"Request":"OpenIncomingMailAttachment","Parameters":[{"Key":"Index", "Value":Index}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.MailInAttachmentSave = function(Index, Path, OperationCallback)
{
    var operationHTML5 = {"Request":"MailInAttachmentSave","Parameters":[{"Key":"Index", "Value":Index},{"Key":"Path", "Value":Path}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.InitializeOutgoingMail = function(OperationCallback)
{
    var operationHTML5 = {"Request":"InitializeOutgoingMail"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetOutgoingMail = function(MailTo, CC, BCC, Subject, Body, OperationCallback)
{
    var operationHTML5 = {"Request":"SetOutgoingMail","Parameters":[{"Key":"MailTo", "Value":MailTo},{"Key":"CC", "Value":CC},{"Key":"BCC", "Value":BCC},{"Key":"Subject", "Value":Subject},{"Key":"Body", "Value":Body}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetOutgoingMailTo = function(MailTo, OperationCallback)
{
    var operationHTML5 = {"Request":"SetOutgoingMailTo","Parameters":[{"Key":"MailTo", "Value":MailTo}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetOutgoingMailCC = function(CC, OperationCallback)
{
    var operationHTML5 = {"Request":"SetOutgoingMailCC","Parameters":[{"Key":"CC", "Value":CC}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetOutgoingMailBCC = function(BCC, OperationCallback)
{
    var operationHTML5 = {"Request":"SetOutgoingMailBCC","Parameters":[{"Key":"BCC", "Value":BCC}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetOutgoingMailSubject = function(Subject, OperationCallback)
{
    var operationHTML5 = {"Request":"SetOutgoingMailSubject","Parameters":[{"Key":"Subject", "Value":Subject}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetOutgoingMailBody = function(Body, OperationCallback)
{
    var operationHTML5 = {"Request":"SetOutgoingMailBody","Parameters":[{"Key":"Body", "Value":Body}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetOutgoingMailAttachments = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetOutgoingMailAttachments"};
    sendMessage(operationHTML5, OperationCallback);
}

this.AddOutgoingMailAttachment = function(FileURL, FileName, FileData, OperationCallback)
{
    var operationHTML5 = {"Request":"AddOutgoingMailAttachment","Parameters":[{"Key":"FileURL", "Value":FileURL}, {"Key":"FileName", "Value":FileName}, {"Key":"FileData", "Value":FileData}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.DeleteOutgoingMailAttachment = function(Index, OperationCallback)
{
    var operationHTML5 = {"Request":"DeleteOutgoingMailAttachment","Parameters":[{"Key":"Index", "Value":Index}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.SendOutgoingMail = function(OperationCallback)
{
    var operationHTML5 = {"Request":"SendOutgoingMail"};
    sendMessage(operationHTML5, OperationCallback);
}

this.FindMailById = function(MailboxType, MailId, OperationCallback)
{
    var operationHTML5 = {"Request":"FindMailById","Parameters":[{"Key":"MailboxType", "Value":MailboxType},{"Key":"MailId", "Value":MailId}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.FindMailBySender = function(MailboxType, Sender, Status, Days, StartDate, EndDate, OperationCallback)
{
    var operationHTML5 = {"Request":"FindMailBySender","Parameters":[{"Key":"MailboxType", "Value":MailboxType},{"Key":"Sender", "Value":Sender},{"Key":"Status", "Value":Status},{"Key":"Days", "Value":Days},{"Key":"StartDate", "Value":StartDate},{"Key":"EndDate", "Value":EndDate}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.GetSaveDraftMail = function(OperationCallback)
{
    var operationHTML5 = {"Request":"GetSaveDraftMail"};
    sendMessage(operationHTML5, OperationCallback);
}

this.SetSaveDraftMail = function(SaveDraftMail, OperationCallback)
{
    var operationHTML5 = {"Request":"SetSaveDraftMail","Parameters":[{"Key":"SaveDraftMail", "Value":SaveDraftMail}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.RetrieveMailSuspended = function(MailId, OperationCallback)
{
    var operationHTML5 = {"Request":"RetrieveMailSuspended","Parameters":[{"Key":"MailId", "Value":MailId}]};
    sendMessage(operationHTML5, OperationCallback);
}

this.OpenWindow = function(WindowCode, OperationCallback)
{
	var operationHTML5 = {"Request":"OpenWindow","Parameters":[{"Key":"WindowCode", "Value":WindowCode}]};
    sendMessage(operationHTML5, OperationCallback);	
}

this.LogoutAgent = function(OperationCallback)
{
	var operationHTML5 = {"Request":"LogoutAgent"};
    sendMessage(operationHTML5, OperationCallback);	
}



}