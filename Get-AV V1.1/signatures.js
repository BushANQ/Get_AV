        // 安全软件特征库 (保持原有代码)
        const avSignatures = {
                'ALYac': ['aylaunch.exe', 'ayupdate2.exe', 'AYRTSrv.exe', 'AYAgent.exe'],
                'AVG': ['AVGSvc.exe', 'AVGUI.exe', 'avgwdsvc.exe', 'avg.exe', 'avgaurd.exe', 'avgemc.exe', 'avgrsx.exe', 'avgserv.exe', 'avgw.exe'],
                'Acronis': ['arsm.exe', 'acronis_license_service.exe'],
                'Ad-Aware': ['AdAwareService.exe', 'Ad-Aware.exe', 'AdAware.exe'],
                'AhnLab-V3': ['patray.exe', 'V3Svc.exe'],
                'Arcabit': ['arcavir.exe', 'arcadc.exe', 'ArcaVirMaster.exe', 'ArcaMainSV.exe', 'ArcaTasksService.exe'],
                'Avast': ['ashDisp.exe', 'AvastUI.exe', 'AvastSvc.exe', 'AvastBrowser.exe', 'AfwServ.exe'],
                'Avira AntiVirus(小红伞)': ['avcenter.exe', 'avguard.exe', 'avgnt.exe', 'sched.exe'],
                'Baidu AntiVirus': ['BaiduSdSvc.exe', 'BaiduSdTray.exe', 'BaiduSd.exe', 'bddownloader.exe', 'baiduansvx.exe'],
                'BitDefender': ['Bdagent.exe', 'BitDefenderCom.exe', 'vsserv.exe', 'bdredline.exe', 'secenter.exe', 'bdservicehost.exe', 'BITDEFENDER.exe'],
                'Bkav': ['BKavService.exe', 'Bka.exe', 'BkavUtil.exe', 'BLuPro.exe'],
                'CAT-QuickHeal': ['QUHLPSVC.exe', 'onlinent.exe', 'sapissvc.exe', 'scanwscs.exe'],
                'CMC': ['CMCTrayIcon.exe'],
                'ClamAV': ['freshclam.exe'],
                'Comodo': ['cpf.exe', 'cavwp.exe', 'ccavsrv.exe', 'cmdvirth.exe'],
                'CrowdStrike Falcon(猎鹰)': ['csfalconservice.exe', 'CSFalconContainer.exe'],
                'Cybereason': ['CybereasonRansomFree.exe', 'CybereasonRansomFreeServiceHost.exe', 'CybereasonAV.exe'],
                'Cylance': ['CylanceSvc.exe'],
                'Cyren': ['vsedsps.exe', 'vseamps.exe', 'vseqrts.exe'],
                'DrWeb': ['drwebcom.exe', 'spidernt.exe', 'drwebscd.exe', 'drweb32w.exe', 'dwengine.exes'],
                'ESET-NOD32': ['egui.exe', 'ecls.exe', 'ekrn.exe', 'eguiProxy.exe', 'EShaSrv.exe'],
                'Trend Micro（趋势科技）': ['tmpfw.exe', 'tmlisten.exe', 'coreServiceShell.exe', 'coreFrameworkHost.exe', 'uiWatchDog.exe', 'TMLISTEN.exe'],
                'Emsisoft': ['a2guard.exe', 'a2free.exe', 'a2service.exe'],
                'Endgame': ['endgame.exe'],
                'F-Prot': ['F-PROT.exe', 'FProtTray.exe', 'FPAVServer.exe', 'f-stopw.exe', 'f-prot95.exe', 'f-agnt95.exe'],
                'F-Secure': ['f-secure.exe', 'fssm32.exe', 'Fsorsp64.exe', 'fsavgui.exe', 'fameh32.exe', 'fch32.exe', 'fih32.exe', 'fnrb32.exe', 'fsav32.exe', 'fsma32.exe', 'fsmb32.exe'],
                'FireEye(火眼)': ['xagtnotif.exe', 'xagt.exe'],
                'Fortinet（飞塔）': ['FortiClient.exe', 'FortiTray.exe', 'FortiScand.exe', 'FortiWF.exe', 'FortiProxy.exe', 'FortiESNAC.exe', 'FortiSSLVPNdaemon.exe', 'FortiTcs.exe', 'FctSecSvr.exe'],
                'GData': ['AVK.exe', 'avkcl.exe', 'avkpop.exe', 'avkservice.exe', 'GDScan.exe', 'AVKWCtl.exe', 'AVKProxy.exe', 'AVKBackupService.exe'],
                'Ikarus': ['guardxservice.exe', 'guardxkickoff.exe'],
                'Jiangmin': ['KVFW.exe', 'KVsrvXP.exe', 'KVMonXP.exe', 'KVwsc.exe'],
                'K7AntiVirus': ['K7TSecurity.exe', 'K7TSMain.Exe', 'K7TSUpdT.exe'],
                'Kaspersky(卡巴斯基)': ['avp.exe', 'avpcc.exe', 'avpm.exe', 'kavpf.exe', 'kavfs.exe', 'klnagent.exe', 'kavtray.exe', 'kavfswp.exe', 'kaspersky.exe'],
                'Max Secure Software': ['SDSystemTray.exe', 'MaxRCSystemTray.exe', 'RCSystemTray.exe', 'MaxAVPlusDM.exe', 'LiveUpdateSD.exe'],
                'Malwarebytes': ['MBAMService.exe', 'mbam.exe', 'mbamtray.exe'],
                'McAfee(迈克菲)': ['Mcshield.exe', 'Tbmon.exe', 'Frameworkservice.exe', 'firesvc.exe', 'firetray.exe', 'hipsvc.exe', 'mfevtps.exe', 'mcafeefire.exe', 'shstat.exe', 'vstskmgr.exe', 'engineserver.exe', 'alogserv.exe', 'avconsol.exe', 'cmgrdian.exe', 'cpd.exe', 'mcmnhdlr.exe', 'mcvsshld.exe', 'mcvsrte.exe', 'mghtml.exe', 'mpfservice.exe', 'mpfagent.exe', 'mpftray.exe', 'vshwin32.exe', 'vsstat.exe', 'guarddog.exe', 'mfeann.exe', 'udaterui.exe', 'naprdmgr.exe', 'mctray.exe', 'fcagate.exe', 'fcag.exe', 'fcags.exe', 'fcagswd.exe', 'macompatsvc.exe', 'masvc.exe', 'mcamnsvc.exe', 'mctary.exe', 'mfecanary.exe', 'mfeconsole.exe', 'mfeesp.exe', 'mfefire.exe', 'mfefw.exe', 'mfemms.exe', 'mfetp.exe', 'mfewc.exe', 'mfewch.exe'],
                'Microsoft Security Essentials': ['MsMpEng.exe', 'msseces.exe', 'mssecess.exe', 'emet_agent.exe', 'emet_service.exe', 'drwatson.exe', 'MpCmdRun.exe', 'NisSrv.exe', 'MsSense.exe', 'MSASCui.exe', 'MSASCuiL.exe', 'SecurityHealthService.exe'],
                'NANO-Antivirus': ['nanoav.exe', 'nanoav64.exe', 'nanoreport.exe', 'nanoreportc.exe', 'nanoreportc64.exe', 'nanorst.exe', 'nanosvc.exe'],
                'Palo Alto Networks': ['PanInstaller.exe'],
                'Panda Security': ['remupd.exe', 'apvxdwin.exe', 'pavproxy.exe', 'pavsched.exe'],
                'Qihoo-360': ['360sd.exe', '360tray.exe', 'ZhuDongFangYu.exe', '360rp.exe', '360rps.exe', '360safe.exe', '360safebox.exe', 'QHActiveDefense.exe', '360skylarsvc.exe', 'LiveUpdate360.exe'],
                'Rising': ['RavMonD.exe', 'rfwmain.exe', 'RsMgrSvc.exe', 'RavMon.exe'],
                'SUPERAntiSpyware': ['superantispyware.exe', 'sascore.exe', 'SAdBlock.exe', 'sabsvc.exe'],
                'SecureAge APEX': ['UniversalAVService.exe', 'EverythingServer.exe', 'clamd.exe'],
                'Sophos AV': ['SavProgress.exe', 'icmon.exe', 'SavMain.exe', 'SophosUI.exe', 'SophosFS.exe', 'SophosHealth.exe', 'SophosSafestore64.exe', 'SophosCleanM.exe', 'SophosFileScanner.exe', 'SophosNtpService.exe', 'SophosOsquery.exe', 'Sophos UI.exe'],
                'TACHYON': [],
                'Tencent': ['QQPCRTP.exe', 'QQPCTray.exe', 'QQPCMgr.exe', 'QQPCNetFlow.exe', 'QQPCRealTimeSpeedup.exe'],
                'TotalDefense': ['AMRT.exe', 'SWatcherSrv.exe', 'Prd.ManagementConsole.exe'],
                'Trapmine': ['TrapmineEnterpriseService.exe', 'TrapmineEnterpriseConfig.exe', 'TrapmineDeployer.exe', 'TrapmineUpgradeService.exe'],
                'TrendMicro': ['TMBMSRV.exe', 'ntrtscan.exe', 'Pop3Trap.exe', 'WebTrap.exe', 'PccNTMon.exe'],
                'VIPRE': ['SBAMSvc.exe', 'VipreEdgeProtection.exe', 'SBAMTray.exe'],
                'ViRobot': ['vrmonnt.exe', 'vrmonsvc.exe', 'Vrproxyd.exe'],
                'Webroot': ['npwebroot.exe', 'WRSA.exe', 'spysweeperui.exe'],
                'Yandex': ['Yandex.exe', 'YandexDisk.exe', 'yandesk.exe'],
                'Zillya': ['zillya.exe', 'ZAVAux.exe', 'ZAVCore.exe'],
                'ZoneAlarm': ['vsmon.exe', 'zapro.exe', 'zonealarm.exe'],
                'Zoner': ['ZPSTray.exe'],
                'eGambit': ['dasc.exe', 'memscan64.exe', 'dastray.exe'],
                'eScan': ['consctl.exe', 'mwaser.exe', 'avpmapp.exe'],
                'Lavasoft': ['AAWTray.exe', 'LavasoftTcpService.exe', 'AdAwareTray.exe', 'WebCompanion.exe', 'WebCompanionInstaller.exe', 'adawarebp.exe', 'ad-watch.exe'],
                'The Cleaner': ['cleaner8.exe'],
                'VBA32': ['vba32lder.exe'],
                'Mongoosa': ['MongoosaGUI.exe', 'mongoose.exe'],
                'Coranti2012': ['CorantiControlCenter32.exe'],
                'UnThreat': ['UnThreat.exe', 'utsvc.exe'],
                'Shield Antivirus': ['CKSoftShiedAntivirus4.exe', 'shieldtray.exe'],
                'VIRUSfighter': ['AVWatchService.exe', 'vfproTray.exe'],
                'Immunet': ['iptray.exe'],
                'PSafe': ['PSafeSysTray.exe', 'PSafeCategoryFinder.exe', 'psafesvc.exe'],
                'nProtect': ['nspupsvc.exe', 'Npkcmsvc.exe', 'npnj5Agent.exe'],
                'Spyware Terminator': ['SpywareTerminatorShield.exe', 'SpywareTerminator.exe'],
                'Norton V24（赛门铁克）': ['ccSvcHst.exe', 'rtvscan.exe', 'ccapp.exe', 'NPFMntor.exe', 'ccRegVfy.exe', 'vptray.exe', 'iamapp.exe', 'nav.exe', 'navapw32.exe', 'navapsvc.exe', 'nisum.exe', 'nmain.exe', 'nprotect.exe', 'smcGui.exe', 'ns.exe', 'nortonsecurity.exe'],
                'Norton V25（Avast）': ['afwServ.exe', 'aswEngSrv.exe', 'aswidsagent.exe', 'AvDump.exe', 'nllToolsSvc.exe', 'NortonSvc.exe', 'wsc_proxy.exe'],
                'Symantec（赛门铁克）': ['ccSetMgr.exe', 'ccapp.exe', 'vptray.exe', 'ccpxysvc.exe', 'cfgwiz.exe', 'smc.exe', 'symproxysvc.exe', 'vpc32.exe', 'lsetup.exe', 'luall.exe', 'lucomserver.exe', 'sbserv.exe', 'ccEvtMgr.exe', 'smcGui.exe', 'snac.exe', 'SymCorpUI.exe', 'sepWscSvc64.exe'],
                '可牛杀毒': ['knsdtray.exe'],
                '流量矿石': ['Miner.exe'],
                'SafeDog(安全狗)': ['safedog.exe', 'SafeDogGuardCenter.exe', 'SafeDogSiteIIS.exe', 'SafeDogTray.exe', 'SafeDogServerUI.exe', 'SafeDogSiteApache.exe', 'CloudHelper.exe', 'SafeDogUpdateCenter.exe'],
                '木马克星': ['parmor.exe', 'Iparmor.exe'],
                '贝壳云安全': ['beikesan.exe'],
                '木马猎手': ['TrojanHunter.exe'],
                '巨盾网游安全盾': ['GG.exe'],
                '绿鹰安全精灵': ['adam.exe'],
                '超级巡警': ['AST.exe'],
                '墨者安全专家': ['ananwidget.exe'],
                '风云防火墙': ['FYFireWall.exe'],
                '微点主动防御': ['MPMon.exe'],
                '天网防火墙': ['pfw.exe'],
                'D 盾': ['D_Safe_Manage.exe', 'd_manage.exe'],
                '云锁': ['yunsuo_agent_service.exe', 'yunsuo_agent_daemon.exe'],
                '护卫神': ['HwsPanel.exe', 'hws_ui.exe', 'hws.exe', 'hwsd.exe', 'HwsHostPanel.exe', 'HwsHostMaster.exe'],
                '火绒安全': ['hipstray.exe', 'wsctrl.exe', 'usysdiag.exe', 'HipsDaemon.exe', 'HipsLog.exe', 'HipsMain.exe', 'wsctrlsvc.exe'],
                '网络病毒克星': ['WEBSCANX.exe'],
                'SPHINX防火墙': ['SPHINX.exe'],
                '奇安信天擎': ['TQClient.exe', 'TQTray.exe', 'QaxEngManager.exe', 'TQDefender.exe'],
                'H+BEDV Datentechnik GmbH': ['avwin.exe', 'avwupsrv.exe'],
                'IBM ISS Proventia': ['blackd.exe', 'rapapp.exe'],
                'eEye Digital Security': ['eeyeevnt.exe', 'blink.exe'],
                'Kerio Personal Firewall': ['persfw.exe', 'wrctrl.exe'],
                'Simplysup': ['Trjscan.exe'],
                'PC Tools AntiVirus': ['PCTAV.exe', 'pctsGui.exe'],
                'VirusBuster Professional': ['vbcmserv.exe'],
                'ClamWin': ['ClamTray.exe', 'clamscan.exe'],
                '安天智甲': ['kxetray.exe', 'kscan.exe', 'AMediumManager.exe', 'kismain.exe'],
                'CMC Endpoint Security': ['CMCNECore.exe', 'cmcepagent.exe', 'cmccore.exe', 'CMCLog.exe', 'CMCFMon.exe'],
                '金山毒霸': ['kxetray.exe', 'kxescore.exe', 'kupdata.exe', 'kwsprotect64.exe', 'kislive.exe', 'knewvip.exe', 'kscan.exe', 'kxecenter.exe', 'kxemain.exe', 'KWatch.exe', 'KSafeSvc.exe', 'KSafeTray.exe'],
                'Agnitum outpost (Outpost Firewall)': ['outpost.exe', 'acs.exe'],
                'Cynet': ['CynetLauncher.exe', 'CynetDS.exe', 'CynetEPS.exe', 'CynetMS.exe', 'CynetAR.exe', 'CynetGW.exe', 'CynetSD64.exe'],
                'Elastic': ['winlogbeat.exe'],
                '金山网盾': ['KSWebShield.exe'],
                'G Data安全软件客户端': ['AVK.exe'],
                '金山网镖': ['kpfwtray.exe'],
                '在扫1433': ['1433.exe'],
                '在爆破': ['DUB.exe'],
                '发现S-U': ['ServUDaemon.exe'],
                '百度卫士': ['bddownloader.exe', 'baiduSafeTray.exe'],
                '百度卫士-主进程': ['baiduansvx.exe'],
                'G Data文件系统实时监控': ['avkwctl9.exe', 'AVKWCTL.exe'],
                'Sophos Anti-Virus': ['SAVMAIN.exe'],
                '360保险箱': ['safeboxTray.exe', '360safebox.exe'],
                'G Data扫描器': ['GDScan.exe'],
                'G Data杀毒代理': ['AVKProxy.exe'],
                'G Data备份服务': ['AVKBackupService.exe'],
                '亚信安全服务器深度安全防护系统': ['Notifier.exe'],
                '阿里云盾': ['AliYunDun.exe', 'AliYunDunUpdate.exe', 'aliyun_assist_service.exe', '/usr/local/aegis/aegis_client/'],
                '腾讯云安全': ['BaradAgent.exe', 'sgagent.exe', 'YDService.exe', 'YDLive.exe', 'YDEdr.exe'],
                '360主机卫士Web': ['360WebSafe.exe', 'QHSrv.exe', 'QHWebshellGuard.exe'],
                '网防G01': ['gov_defence_service.exe', 'gov_defence_daemon.exe'],
                '云锁客户端': ['PC.exe'],
                'Symantec Shared诺顿邮件防火墙软件': ['SNDSrvc.exe'],
                'U盘杀毒专家': ['USBKiller.exe'],
                '天擎EDRAgent': ['360EntClient.exe'],
                '360(奇安信)天擎': ['360EntMisc.exe'],
                '阿里云-云盾': ['alisecguard.exe'],
                'Sophos AutoUpdate Service': ['ALsvc.exe'],
                '阿里云监控': ['CmsGoAgent.windows-amd64.'],
                '深信服EDRAgent': ['edr_agent.exe', 'edr_monitor.exe', 'edr_sec_plan.exe'],
                '启明星辰天珣EDRAgent': ['ESAV.exe', 'ESCCControl.exe', 'ESCC.exe', 'ESCCIndex.exe'],
                '蓝鲸Agent': ['gse_win_agent.exe', 'gse_win_daemon.exe'],
                '联想电脑管家': ['LAVService.exe'],
                'Sophos MCS Agent': ['McsAgent.exe'],
                'Sophos MCS Client': ['McsClient.exe'],
                '360TotalSecurity(360国际版)': ['QHSafeMain.exe', 'QHSafeTray.exe', 'QHWatchdog.exe', 'QHActiveDefense.exe'],
                'Sophos Device Control Service': ['sdcservice.exe'],
                'Sophos Endpoint Defense Service': ['SEDService.exe'],
                'Windows Defender SmartScreen': ['smartscreen.exe'],
                'Sophos Clean Service': ['SophosCleanM64.exe'],
                'Sophos FIM': ['SophosFIMService.exe'],
                'Sophos System Protection Service': ['SSPService.exe'],
                'Sophos Web Control Service': ['swc_service.exe'],
                '天眼云镜': ['TitanAgent.exe', 'TitanMonitor.exe'],
                '天融信终端防御': ['TopsecMain.exe', 'TopsecTray.exe'],
                '360杀毒-网盾': ['wdswfsafe.exe'],
                '智量安全': ['WiseVector.exe', 'WiseVectorSvc.exe'],
                '天擎': ['QAXEntClient.exe', 'QAXTray.exe'],
                '安恒主机卫士': ['AgentService.exe', 'ProtectMain.exe'],
                '亚信DS服务端': ['Deep Security Manager.exe'],
                '亚信DS客户端': ['dsa.exe', 'UniAccessAgent.exe', 'dsvp.exe'],
                '深信服EDR': ['/sangfor/edr/agent'],
                '阿里云云助手守护进程': ['/assist-daemon/assist_daemon'],
                'zabbix agen端': ['zabbix_agentd'],
                '阿里云盾升级': ['/usr/local/aegis/aegis_update/AliYunDunUpdate'],
                '阿里云助手': ['/usr/local/share/aliyun-assist'],
                '阿里系监控': ['AliHips', 'AliNet', 'AliDetect', 'AliScriptEngine'],
                '腾讯系监控': ['secu-tcs-agent', '/usr/local/qcloud/stargate/', '/usr/local/qcloud/monitor/', '/usr/local/qcloud/YunJing/'],
                '腾讯自动化助手TAT产品': ['/usr/local/qcloud/tat_agent/'],
                'SentinelOne(哨兵一号)': ['SentinelServiceHost.exe', 'SentinelStaticEngine.exe', 'SentinelStaticEngineScanner.exe', 'SentinelMemoryScanner.exe', 'SentinelAgent.exe', 'SentinelAgentWorker.exe', 'SentinelUI.exe'],
                'OneSec(微步)': ['tbAgent.exe', 'tbAgentSrv.exe', 'tbGuard.exe'],
                '亚信安全防毒墙网络版': ['PccNT.exe', 'PccNTMon.exe', 'PccNTUpd.exe'],
                'Illumio ZTS': ['venVtapServer.exe', 'venPlatformHandler.exe', 'venAgentMonitor.exe', 'venAgentMgr.exe'],
                '奇安信统一服务器安全': ['NuboshEndpoint.exe'],
                'IObit Malware Fighter': ['IMF.exe', 'IMFCore.exe', 'IMFsrv.exe', 'IMFSrvWsc.exe'],
                'Deep Instinct': ['DeepUI.exe']
                        // 可以继续添加更多特征
                    };