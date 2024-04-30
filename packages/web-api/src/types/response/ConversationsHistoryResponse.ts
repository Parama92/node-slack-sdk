/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../../WebClient';
export type ConversationsHistoryResponse = WebAPICallResult & {
  channel_actions_count?: number;
  channel_actions_ts?:    number;
  error?:                 string;
  has_more?:              boolean;
  messages?:              MessageElement[];
  needed?:                string;
  ok?:                    boolean;
  oldest?:                string;
  pin_count?:             number;
  provided?:              string;
  response_metadata?:     ResponseMetadata;
};

export interface MessageElement {
  app_id?:            string;
  attachments?:       Attachment[];
  blocks?:            PurpleBlock[];
  bot_id?:            string;
  bot_profile?:       BotProfile;
  client_msg_id?:     string;
  display_as_bot?:    boolean;
  edited?:            Edited;
  files?:             FileElement[];
  icons?:             MessageIcons;
  inviter?:           string;
  is_locked?:         boolean;
  latest_reply?:      string;
  metadata?:          FluffyMetadata;
  parent_user_id?:    string;
  purpose?:           string;
  reactions?:         Reaction[];
  reply_count?:       number;
  reply_users?:       string[];
  reply_users_count?: number;
  root?:              FluffyRoot;
  subscribed?:        boolean;
  subtype?:           string;
  team?:              string;
  text?:              string;
  thread_ts?:         string;
  topic?:             string;
  ts?:                string;
  type?:              string;
  upload?:            boolean;
  user?:              string;
  username?:          string;
  x_files?:           string[];
}

export interface Attachment {
  actions?:               Action[];
  app_id?:                string;
  app_unfurl_url?:        string;
  author_icon?:           string;
  author_id?:             string;
  author_link?:           string;
  author_name?:           string;
  author_subname?:        string;
  blocks?:                TitleBlockElement[];
  bot_id?:                string;
  callback_id?:           string;
  channel_id?:            string;
  channel_name?:          string;
  channel_team?:          string;
  color?:                 string;
  fallback?:              string;
  fields?:                Field[];
  filename?:              string;
  files?:                 FileElement[];
  footer?:                string;
  footer_icon?:           string;
  from_url?:              string;
  hide_color?:            boolean;
  id?:                    number;
  image_bytes?:           number;
  image_height?:          number;
  image_url?:             string;
  image_width?:           number;
  indent?:                boolean;
  is_app_unfurl?:         boolean;
  is_file_attachment?:    boolean;
  is_msg_unfurl?:         boolean;
  is_reply_unfurl?:       boolean;
  is_thread_root_unfurl?: boolean;
  message_blocks?:        MessageBlock[];
  metadata?:              AttachmentMetadata;
  mimetype?:              string;
  mrkdwn_in?:             string[];
  msg_subtype?:           string;
  original_url?:          string;
  pretext?:               string;
  preview?:               Preview;
  service_icon?:          string;
  service_name?:          string;
  service_url?:           string;
  size?:                  number;
  text?:                  string;
  thumb_height?:          number;
  thumb_url?:             string;
  thumb_width?:           number;
  title?:                 string;
  title_link?:            string;
  ts?:                    string;
  url?:                   string;
  video_html?:            string;
  video_html_height?:     number;
  video_html_width?:      number;
  video_url?:             string;
}

export interface Action {
  confirm?:          ActionConfirm;
  data_source?:      string;
  id?:               string;
  min_query_length?: number;
  name?:             string;
  option_groups?:    ActionOptionGroup[];
  options?:          SelectedOptionElement[];
  selected_options?: SelectedOptionElement[];
  style?:            string;
  text?:             string;
  type?:             string;
  url?:              string;
  value?:            string;
}

export interface ActionConfirm {
  dismiss_text?: string;
  ok_text?:      string;
  text?:         string;
  title?:        string;
}

export interface ActionOptionGroup {
  options?: SelectedOptionElement[];
  text?:    string;
}

export interface SelectedOptionElement {
  text?:  string;
  value?: string;
}

export interface TitleBlockElement {
  accessory?:                    Accessory;
  alt_text?:                     string;
  app_collaborators?:            string[];
  app_id?:                       string;
  author_name?:                  string;
  block_id?:                     string;
  bot_user_id?:                  string;
  button_label?:                 string;
  description?:                  DescriptionElement | string;
  developer_trace_id?:           string;
  elements?:                     Accessory[];
  fallback?:                     string;
  fields?:                       DescriptionElement[];
  function_trigger_id?:          string;
  image_bytes?:                  number;
  image_height?:                 number;
  image_url?:                    string;
  image_width?:                  number;
  is_animated?:                  boolean;
  is_workflow_app?:              boolean;
  owning_team_id?:               string;
  provider_icon_url?:            string;
  provider_name?:                string;
  sales_home_workflow_app_type?: number;
  share_url?:                    string;
  slack_file?:                   SlackFile;
  text?:                         DescriptionElement;
  thumbnail_url?:                string;
  title?:                        DescriptionElement | string;
  title_url?:                    string;
  trigger_subtype?:              string;
  trigger_type?:                 string;
  type?:                         BlockType;
  url?:                          string;
  video_url?:                    string;
  workflow_id?:                  string;
}

export interface Accessory {
  accessibility_label?:             string;
  action_id?:                       string;
  alt_text?:                        string;
  border?:                          number;
  confirm?:                         AccessoryConfirm;
  default_to_current_conversation?: boolean;
  elements?:                        AccessoryElement[];
  fallback?:                        string;
  filter?:                          Filter;
  focus_on_load?:                   boolean;
  image_bytes?:                     number;
  image_height?:                    number;
  image_url?:                       string;
  image_width?:                     number;
  indent?:                          number;
  initial_channel?:                 string;
  initial_channels?:                string[];
  initial_conversation?:            string;
  initial_conversations?:           string[];
  initial_date?:                    string;
  initial_date_time?:               number;
  initial_option?:                  InitialOptionElement;
  initial_options?:                 InitialOptionElement[];
  initial_time?:                    string;
  initial_user?:                    string;
  initial_users?:                   string[];
  max_selected_items?:              number;
  min_query_length?:                number;
  offset?:                          number;
  option_groups?:                   AccessoryOptionGroup[];
  options?:                         InitialOptionElement[];
  placeholder?:                     DescriptionElement;
  response_url_enabled?:            boolean;
  slack_file?:                      SlackFile;
  style?:                           string;
  text?:                            DescriptionElement;
  timezone?:                        string;
  type?:                            string;
  url?:                             string;
  value?:                           string;
  workflow?:                        Workflow;
}

export interface AccessoryConfirm {
  confirm?: DescriptionElement;
  deny?:    DescriptionElement;
  style?:   string;
  text?:    DescriptionElement;
  title?:   DescriptionElement;
}

export interface DescriptionElement {
  emoji?:    boolean;
  text?:     string;
  type?:     DescriptionType;
  verbatim?: boolean;
}

export enum DescriptionType {
  Mrkdwn = 'mrkdwn',
  PlainText = 'plain_text',
}

export interface AccessoryElement {
  border?:   number;
  elements?: PurpleElement[];
  indent?:   number;
  offset?:   number;
  style?:    string;
  type?:     FluffyType;
}

export interface PurpleElement {
  channel_id?:   string;
  name?:         string;
  range?:        string;
  skin_tone?:    number;
  style?:        Style;
  team_id?:      string;
  text?:         string;
  timestamp?:    string;
  type?:         PurpleType;
  unicode?:      string;
  url?:          string;
  user_id?:      string;
  usergroup_id?: string;
  value?:        string;
}

export interface Style {
  bold?:   boolean;
  code?:   boolean;
  italic?: boolean;
  strike?: boolean;
}

export enum PurpleType {
  Broadcast = 'broadcast',
  Channel = 'channel',
  Color = 'color',
  Date = 'date',
  Emoji = 'emoji',
  Link = 'link',
  Team = 'team',
  Text = 'text',
  User = 'user',
  Usergroup = 'usergroup',
}

export enum FluffyType {
  RichTextList = 'rich_text_list',
  RichTextPreformatted = 'rich_text_preformatted',
  RichTextQuote = 'rich_text_quote',
  RichTextSection = 'rich_text_section',
}

export interface Filter {
  exclude_bot_users?:                boolean;
  exclude_external_shared_channels?: boolean;
  include?:                          any[];
}

export interface InitialOptionElement {
  description?: DescriptionElement;
  text?:        DescriptionElement;
  url?:         string;
  value?:       string;
}

export interface AccessoryOptionGroup {
  label?:   DescriptionElement;
  options?: InitialOptionElement[];
}

export interface SlackFile {
  id?:  string;
  url?: string;
}

export interface Workflow {
  trigger?: Trigger;
}

export interface Trigger {
  customizable_input_parameters?: CustomizableInputParameter[];
  url?:                           string;
}

export interface CustomizableInputParameter {
  name?:  string;
  value?: string;
}

export enum BlockType {
  Actions = 'actions',
  Context = 'context',
  Divider = 'divider',
  Image = 'image',
  RichText = 'rich_text',
  Section = 'section',
  ShareShortcut = 'share_shortcut',
  Video = 'video',
}

export interface Field {
  short?: boolean;
  title?: string;
  value?: string;
}

export interface FileElement {
  access?:                                  string;
  alt_txt?:                                 string;
  app_id?:                                  string;
  app_name?:                                string;
  attachments?:                             any[];
  blocks?:                                  TitleBlockElement[];
  bot_id?:                                  string;
  canvas_template_mode?:                    string;
  cc?:                                      Cc[];
  channel_actions_count?:                   number;
  channel_actions_ts?:                      string;
  channels?:                                string[];
  comments_count?:                          number;
  converted_pdf?:                           string;
  created?:                                 number;
  deanimate?:                               string;
  deanimate_gif?:                           string;
  display_as_bot?:                          boolean;
  dm_mpdm_users_with_file_access?:          DmMpdmUsersWithFileAccess[];
  duration_ms?:                             number;
  edit_link?:                               string;
  edit_timestamp?:                          number;
  editable?:                                boolean;
  editor?:                                  string;
  editors?:                                 string[];
  external_id?:                             string;
  external_type?:                           string;
  external_url?:                            string;
  file_access?:                             string;
  filetype?:                                string;
  from?:                                    Cc[];
  groups?:                                  string[];
  has_more?:                                boolean;
  has_more_shares?:                         boolean;
  has_rich_preview?:                        boolean;
  headers?:                                 Headers;
  hls?:                                     string;
  hls_embed?:                               string;
  id?:                                      string;
  image_exif_rotation?:                     number;
  ims?:                                     string[];
  initial_comment?:                         InitialComment;
  is_channel_space?:                        boolean;
  is_external?:                             boolean;
  is_public?:                               boolean;
  is_starred?:                              boolean;
  last_editor?:                             string;
  last_read?:                               number;
  lines?:                                   number;
  lines_more?:                              number;
  linked_channel_id?:                       string;
  media_display_type?:                      string;
  media_progress?:                          MediaProgress;
  mimetype?:                                string;
  mode?:                                    string;
  mp4?:                                     string;
  mp4_low?:                                 string;
  name?:                                    string;
  non_owner_editable?:                      boolean;
  num_stars?:                               number;
  org_or_workspace_access?:                 string;
  original_attachment_count?:               number;
  original_h?:                              string;
  original_w?:                              string;
  permalink?:                               string;
  permalink_public?:                        string;
  pinned_to?:                               string[];
  pjpeg?:                                   string;
  plain_text?:                              string;
  pretty_type?:                             string;
  preview?:                                 string;
  preview_highlight?:                       string;
  preview_is_truncated?:                    boolean;
  preview_plain_text?:                      string;
  private_channels_with_file_access_count?: number;
  public_url_shared?:                       boolean;
  quip_thread_id?:                          string;
  reactions?:                               Reaction[];
  saved?:                                   Saved;
  sent_to_self?:                            boolean;
  shares?:                                  Shares;
  show_badge?:                              boolean;
  simplified_html?:                         string;
  size?:                                    number;
  source_team?:                             string;
  subject?:                                 string;
  subtype?:                                 string;
  team_pref_version_history_enabled?:       boolean;
  teams_shared_with?:                       any[];
  template_conversion_ts?:                  number;
  template_description?:                    string;
  template_icon?:                           string;
  template_name?:                           string;
  template_title?:                          string;
  thumb_1024?:                              string;
  thumb_1024_gif?:                          string;
  thumb_1024_h?:                            string;
  thumb_1024_w?:                            string;
  thumb_160?:                               string;
  thumb_160_gif?:                           string;
  thumb_160_h?:                             string;
  thumb_160_w?:                             string;
  thumb_360?:                               string;
  thumb_360_gif?:                           string;
  thumb_360_h?:                             string;
  thumb_360_w?:                             string;
  thumb_480?:                               string;
  thumb_480_gif?:                           string;
  thumb_480_h?:                             string;
  thumb_480_w?:                             string;
  thumb_64?:                                string;
  thumb_64_gif?:                            string;
  thumb_64_h?:                              string;
  thumb_64_w?:                              string;
  thumb_720?:                               string;
  thumb_720_gif?:                           string;
  thumb_720_h?:                             string;
  thumb_720_w?:                             string;
  thumb_80?:                                string;
  thumb_800?:                               string;
  thumb_800_gif?:                           string;
  thumb_800_h?:                             string;
  thumb_800_w?:                             string;
  thumb_80_gif?:                            string;
  thumb_80_h?:                              string;
  thumb_80_w?:                              string;
  thumb_960?:                               string;
  thumb_960_gif?:                           string;
  thumb_960_h?:                             string;
  thumb_960_w?:                             string;
  thumb_gif?:                               string;
  thumb_pdf?:                               string;
  thumb_pdf_h?:                             string;
  thumb_pdf_w?:                             string;
  thumb_tiny?:                              string;
  thumb_video?:                             string;
  thumb_video_h?:                           number;
  thumb_video_w?:                           number;
  timestamp?:                               number;
  title?:                                   string;
  title_blocks?:                            TitleBlockElement[];
  to?:                                      Cc[];
  transcription?:                           Transcription;
  update_notification?:                     number;
  updated?:                                 number;
  url_private?:                             string;
  url_private_download?:                    string;
  url_static_preview?:                      string;
  user?:                                    string;
  user_team?:                               string;
  username?:                                string;
  vtt?:                                     string;
}

export interface Cc {
  address?:  string;
  name?:     string;
  original?: string;
}

export interface DmMpdmUsersWithFileAccess {
  access?:  string;
  user_id?: string;
}

export interface Headers {
  date?:        string;
  in_reply_to?: string;
  message_id?:  string;
  reply_to?:    string;
}

export interface InitialComment {
  channel?:   string;
  comment?:   string;
  created?:   number;
  id?:        string;
  is_intro?:  boolean;
  timestamp?: number;
  user?:      string;
}

export interface MediaProgress {
  duration_ms?:   number;
  max_offset_ms?: number;
  offset_ms?:     number;
}

export interface Reaction {
  count?: number;
  name?:  string;
  url?:   string;
  users?: string[];
}

export interface Saved {
  date_completed?: number;
  date_due?:       number;
  is_archived?:    boolean;
  state?:          string;
}

export interface Shares {
  private?: { [key: string]: Private[] };
  public?:  { [key: string]: Private[] };
}

export interface Private {
  access?:            string;
  channel_name?:      string;
  date_last_shared?:  number;
  latest_reply?:      string;
  reply_count?:       number;
  reply_users?:       string[];
  reply_users_count?: number;
  share_user_id?:     string;
  source?:            string;
  team_id?:           string;
  thread_ts?:         string;
  ts?:                string;
}

export interface Transcription {
  locale?: string;
  status?: string;
}

export interface MessageBlock {
  channel?: string;
  message?: MessageBlockMessage;
  team?:    string;
  ts?:      string;
}

export interface MessageBlockMessage {
  app_id?:              string;
  attachments?:         any[];
  blocks?:              TitleBlockElement[];
  bot_id?:              string;
  bot_link?:            string;
  bot_profile?:         BotProfile;
  channel?:             string;
  client_msg_id?:       string;
  comment?:             Comment;
  display_as_bot?:      boolean;
  edited?:              Edited;
  file?:                BlockFile;
  files?:               any[];
  hidden?:              boolean;
  icons?:               MessageIcons;
  inviter?:             string;
  is_intro?:            boolean;
  is_locked?:           boolean;
  is_starred?:          boolean;
  is_thread_broadcast?: boolean;
  item?:                Comment;
  item_type?:           string;
  last_read?:           string;
  latest_reply?:        string;
  metadata?:            PurpleMetadata;
  no_notifications?:    boolean;
  parent_user_id?:      string;
  pinned_to?:           any[];
  purpose?:             string;
  reactions?:           any[];
  replies?:             any[];
  reply_count?:         number;
  reply_users?:         any[];
  reply_users_count?:   number;
  room?:                Room;
  root?:                PurpleRoot;
  subscribed?:          boolean;
  subtype?:             string;
  team?:                string;
  text?:                string;
  thread_ts?:           string;
  topic?:               string;
  ts?:                  string;
  type?:                string;
  unfurl_links?:        boolean;
  unfurl_media?:        boolean;
  upload?:              boolean;
  user?:                string;
  username?:            string;
  wibblr?:              boolean;
  x_files?:             any[];
}

export interface BotProfile {
  app_id?:  string;
  deleted?: boolean;
  icons?:   BotProfileIcons;
  id?:      string;
  name?:    string;
  team_id?: string;
  updated?: number;
}

export interface BotProfileIcons {
  image_36?: string;
  image_48?: string;
  image_72?: string;
}

export interface Comment {
  comment?:              string;
  created?:              string;
  display_as_bot?:       boolean;
  edit_link?:            string;
  editable?:             boolean;
  external_type?:        string;
  filetype?:             string;
  has_rich_preview?:     boolean;
  id?:                   string;
  is_external?:          boolean;
  is_intro?:             boolean;
  is_public?:            boolean;
  is_starred?:           boolean;
  lines?:                number;
  lines_more?:           number;
  media_display_type?:   string;
  mimetype?:             string;
  mode?:                 string;
  name?:                 string;
  permalink?:            string;
  permalink_public?:     boolean;
  pretty_type?:          string;
  preview?:              string;
  preview_highlight?:    string;
  preview_is_truncated?: boolean;
  public_url_shared?:    boolean;
  size?:                 number;
  timestamp?:            string;
  title?:                string;
  url_private?:          string;
  url_private_download?: boolean;
  user?:                 string;
  username?:             string;
}

export interface Edited {
  ts?:   string;
  user?: string;
}

export interface BlockFile {
  access?:                                  string;
  alt_txt?:                                 string;
  app_id?:                                  string;
  app_name?:                                string;
  attachments?:                             any[];
  blocks?:                                  any[];
  bot_id?:                                  string;
  canvas_template_mode?:                    string;
  cc?:                                      any[];
  channel_actions_count?:                   number;
  channel_actions_ts?:                      string;
  channels?:                                any[];
  comments_count?:                          number;
  converted_pdf?:                           string;
  created?:                                 number;
  deanimate?:                               string;
  deanimate_gif?:                           string;
  display_as_bot?:                          boolean;
  dm_mpdm_users_with_file_access?:          any[];
  duration_ms?:                             number;
  edit_link?:                               string;
  edit_timestamp?:                          number;
  editable?:                                boolean;
  editor?:                                  string;
  editors?:                                 any[];
  external_id?:                             string;
  external_type?:                           string;
  external_url?:                            string;
  file_access?:                             string;
  filetype?:                                string;
  from?:                                    any[];
  groups?:                                  any[];
  has_more?:                                boolean;
  has_more_shares?:                         boolean;
  has_rich_preview?:                        boolean;
  headers?:                                 Headers;
  hls?:                                     string;
  hls_embed?:                               string;
  id?:                                      string;
  image_exif_rotation?:                     number;
  ims?:                                     any[];
  initial_comment?:                         InitialComment;
  is_channel_space?:                        boolean;
  is_external?:                             boolean;
  is_public?:                               boolean;
  is_starred?:                              boolean;
  last_editor?:                             string;
  last_read?:                               number;
  lines?:                                   number;
  lines_more?:                              number;
  linked_channel_id?:                       string;
  media_display_type?:                      string;
  media_progress?:                          MediaProgress;
  mimetype?:                                string;
  mode?:                                    string;
  mp4?:                                     string;
  mp4_low?:                                 string;
  name?:                                    string;
  non_owner_editable?:                      boolean;
  num_stars?:                               number;
  org_or_workspace_access?:                 string;
  original_attachment_count?:               number;
  original_h?:                              string;
  original_w?:                              string;
  permalink?:                               string;
  permalink_public?:                        string;
  pinned_to?:                               any[];
  pjpeg?:                                   string;
  plain_text?:                              string;
  pretty_type?:                             string;
  preview?:                                 string;
  preview_highlight?:                       string;
  preview_is_truncated?:                    boolean;
  preview_plain_text?:                      string;
  private_channels_with_file_access_count?: number;
  public_url_shared?:                       boolean;
  quip_thread_id?:                          string;
  reactions?:                               any[];
  saved?:                                   Saved;
  sent_to_self?:                            boolean;
  shares?:                                  EventPayload;
  show_badge?:                              boolean;
  simplified_html?:                         string;
  size?:                                    number;
  source_team?:                             string;
  subject?:                                 string;
  subtype?:                                 string;
  team_pref_version_history_enabled?:       boolean;
  teams_shared_with?:                       any[];
  template_conversion_ts?:                  number;
  template_description?:                    string;
  template_icon?:                           string;
  template_name?:                           string;
  template_title?:                          string;
  thumb_1024?:                              string;
  thumb_1024_gif?:                          string;
  thumb_1024_h?:                            string;
  thumb_1024_w?:                            string;
  thumb_160?:                               string;
  thumb_160_gif?:                           string;
  thumb_160_h?:                             string;
  thumb_160_w?:                             string;
  thumb_360?:                               string;
  thumb_360_gif?:                           string;
  thumb_360_h?:                             string;
  thumb_360_w?:                             string;
  thumb_480?:                               string;
  thumb_480_gif?:                           string;
  thumb_480_h?:                             string;
  thumb_480_w?:                             string;
  thumb_64?:                                string;
  thumb_64_gif?:                            string;
  thumb_64_h?:                              string;
  thumb_64_w?:                              string;
  thumb_720?:                               string;
  thumb_720_gif?:                           string;
  thumb_720_h?:                             string;
  thumb_720_w?:                             string;
  thumb_80?:                                string;
  thumb_800?:                               string;
  thumb_800_gif?:                           string;
  thumb_800_h?:                             string;
  thumb_800_w?:                             string;
  thumb_80_gif?:                            string;
  thumb_80_h?:                              string;
  thumb_80_w?:                              string;
  thumb_960?:                               string;
  thumb_960_gif?:                           string;
  thumb_960_h?:                             string;
  thumb_960_w?:                             string;
  thumb_gif?:                               string;
  thumb_pdf?:                               string;
  thumb_pdf_h?:                             string;
  thumb_pdf_w?:                             string;
  thumb_tiny?:                              string;
  thumb_video?:                             string;
  thumb_video_h?:                           number;
  thumb_video_w?:                           number;
  timestamp?:                               number;
  title?:                                   string;
  title_blocks?:                            any[];
  to?:                                      any[];
  transcription?:                           Transcription;
  update_notification?:                     number;
  updated?:                                 number;
  url_private?:                             string;
  url_private_download?:                    string;
  url_static_preview?:                      string;
  user?:                                    string;
  user_team?:                               string;
  username?:                                string;
  vtt?:                                     string;
}

export interface EventPayload {
}

export interface MessageIcons {
  emoji?:    string;
  image_36?: string;
  image_48?: string;
  image_64?: string;
  image_72?: string;
}

export interface PurpleMetadata {
  event_type?: string;
}

export interface Room {
  app_id?:                       string;
  attached_file_ids?:            any[];
  background_id?:                string;
  call_family?:                  string;
  canvas_background?:            string;
  canvas_thread_ts?:             string;
  channels?:                     any[];
  created_by?:                   string;
  date_end?:                     number;
  date_start?:                   number;
  display_id?:                   string;
  external_unique_id?:           string;
  has_ended?:                    boolean;
  id?:                           string;
  is_dm_call?:                   boolean;
  is_prewarmed?:                 boolean;
  is_scheduled?:                 boolean;
  media_backend_type?:           string;
  media_server?:                 string;
  name?:                         string;
  participant_history?:          any[];
  participants?:                 any[];
  participants_camera_off?:      any[];
  participants_camera_on?:       any[];
  participants_screenshare_off?: any[];
  participants_screenshare_on?:  any[];
  thread_root_ts?:               string;
  was_accepted?:                 boolean;
  was_missed?:                   boolean;
  was_rejected?:                 boolean;
}

export interface PurpleRoot {
  bot_id?:            string;
  bot_profile?:       BotProfile;
  edited?:            Edited;
  icons?:             MessageIcons;
  last_read?:         string;
  latest_reply?:      string;
  mrkdwn?:            boolean;
  no_notifications?:  boolean;
  parent_user_id?:    string;
  replies?:           any[];
  reply_count?:       number;
  reply_users?:       any[];
  reply_users_count?: number;
  room?:              Room;
  subscribed?:        boolean;
  subtype?:           string;
  team?:              string;
  text?:              string;
  thread_ts?:         string;
  ts?:                string;
  type?:              string;
  unread_count?:      number;
  user?:              string;
  username?:          string;
}

export interface AttachmentMetadata {
  extension?:   string;
  format?:      string;
  original_h?:  number;
  original_w?:  number;
  rotation?:    number;
  thumb_160?:   boolean;
  thumb_360_h?: number;
  thumb_360_w?: number;
  thumb_64?:    boolean;
  thumb_80?:    boolean;
  thumb_tiny?:  string;
}

export interface Preview {
  can_remove?: boolean;
  icon_url?:   string;
  subtitle?:   DescriptionElement;
  title?:      DescriptionElement;
  type?:       string;
}

export interface PurpleBlock {
  accessory?:                    Accessory;
  alt_text?:                     string;
  api_decoration_available?:     boolean;
  app_collaborators?:            string[];
  app_id?:                       string;
  author_name?:                  string;
  block_id?:                     string;
  bot_user_id?:                  string;
  button_label?:                 string;
  call?:                         Call;
  call_id?:                      string;
  description?:                  DescriptionElement;
  developer_trace_id?:           string;
  dispatch_action?:              boolean;
  element?:                      Accessory;
  elements?:                     Accessory[];
  external_id?:                  string;
  fallback?:                     string;
  fields?:                       DescriptionElement[];
  file?:                         BlockFile;
  file_id?:                      string;
  function_trigger_id?:          string;
  hint?:                         DescriptionElement;
  image_bytes?:                  number;
  image_height?:                 number;
  image_url?:                    string;
  image_width?:                  number;
  is_animated?:                  boolean;
  is_workflow_app?:              boolean;
  label?:                        DescriptionElement;
  optional?:                     boolean;
  owning_team_id?:               string;
  provider_icon_url?:            string;
  provider_name?:                string;
  sales_home_workflow_app_type?: number;
  share_url?:                    string;
  slack_file?:                   SlackFile;
  source?:                       string;
  text?:                         DescriptionElement;
  thumbnail_url?:                string;
  title?:                        DescriptionElement;
  title_url?:                    string;
  trigger_subtype?:              string;
  trigger_type?:                 string;
  type?:                         BlockType;
  url?:                          string;
  video_url?:                    string;
  workflow_id?:                  string;
}

export interface Call {
  media_backend_type?: string;
  v1?:                 V1;
}

export interface V1 {
  active_participants?:  Participant[];
  all_participants?:     Participant[];
  app_icon_urls?:        AppIconUrls;
  app_id?:               string;
  channels?:             string[];
  created_by?:           string;
  date_end?:             number;
  date_start?:           number;
  desktop_app_join_url?: string;
  display_id?:           string;
  has_ended?:            boolean;
  id?:                   string;
  is_dm_call?:           boolean;
  join_url?:             string;
  name?:                 string;
  was_accepted?:         boolean;
  was_missed?:           boolean;
  was_rejected?:         boolean;
}

export interface Participant {
  avatar_url?:   string;
  display_name?: string;
  external_id?:  string;
  slack_id?:     string;
}

export interface AppIconUrls {
  image_1024?:     string;
  image_128?:      string;
  image_192?:      string;
  image_32?:       string;
  image_36?:       string;
  image_48?:       string;
  image_512?:      string;
  image_64?:       string;
  image_72?:       string;
  image_96?:       string;
  image_original?: string;
}

export interface FluffyMetadata {
  event_payload?: EventPayload;
  event_type?:    string;
}

export interface FluffyRoot {
  bot_id?:            string;
  icons?:             PurpleIcons;
  latest_reply?:      string;
  parent_user_id?:    string;
  reply_count?:       number;
  reply_users?:       string[];
  reply_users_count?: number;
  subscribed?:        boolean;
  subtype?:           string;
  text?:              string;
  thread_ts?:         string;
  ts?:                string;
  type?:              string;
  username?:          string;
}

export interface PurpleIcons {
  emoji?:    string;
  image_64?: string;
}

export interface ResponseMetadata {
  next_cursor?: string;
}